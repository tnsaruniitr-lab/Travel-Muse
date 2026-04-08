import { Router, type IRouter } from "express";
import rateLimit from "express-rate-limit";
import { parsePhoneNumber, isValidPhoneNumber } from "libphonenumber-js";
import { pool } from "@workspace/db";

const router: IRouter = Router();

const ALLOWED_COUNTRY_CODES = new Set([
  "+1", "+44", "+91", "+61", "+64", "+353", "+27", "+65", "+60",
  "+49", "+33", "+34", "+39", "+31", "+46", "+47", "+45", "+358",
  "+55", "+52", "+54", "+57", "+51", "+56", "+58", "+593", "+595",
  "+81", "+82", "+86", "+852", "+853", "+886", "+66", "+62",
  "+92", "+880", "+94", "+977", "+63", "+84",
  "+971", "+966", "+20", "+234", "+254", "+233", "+212",
]);

const waitlistLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again in 15 minutes." },
});

router.post("/waitlist", waitlistLimiter, async (req, res) => {
  try {
    const { countryCode, phoneNumber } = req.body as {
      countryCode?: string;
      phoneNumber?: string;
    };

    if (!countryCode || !phoneNumber) {
      res.status(400).json({ error: "Country code and phone number are required." });
      return;
    }

    if (!ALLOWED_COUNTRY_CODES.has(countryCode)) {
      res.status(400).json({ error: "Unsupported country code." });
      return;
    }

    const combined = `${countryCode}${phoneNumber.replace(/\s/g, "")}`;

    let isValid = false;
    try {
      isValid = isValidPhoneNumber(combined);
    } catch {
      isValid = false;
    }

    if (!isValid) {
      res.status(400).json({ error: "Please enter a valid phone number." });
      return;
    }

    let normalized = combined;
    try {
      normalized = parsePhoneNumber(combined).number;
    } catch {
      normalized = combined;
    }

    await pool.query(
      "INSERT INTO waitlist_phones (country_code, phone_number, full_number) VALUES ($1, $2, $3) ON CONFLICT (full_number) DO NOTHING",
      [countryCode, phoneNumber.trim(), normalized],
    );

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    res.status(500).json({ error: "Server error, please try again." });
  }
});

export default router;
