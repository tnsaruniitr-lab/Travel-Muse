import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Calendar,
  MapPin,
  Wallet,
  Globe,
  XCircle,
  Plane,
  Sparkles,
  Heart,
  Palmtree,
  Mountain,
  Compass,
  Camera,
  Music,
  Ticket,
  CalendarDays,
  Map as MapIcon,
  DollarSign,
  Users as UsersIcon,
  ChevronDown,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, CSSProperties, FormEvent } from "react";
import {
  AsYouType,
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  parsePhoneNumberFromString,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";
import phoneExamples from "libphonenumber-js/examples.mobile.json";

/* ─── Tryps DS tokens (inline hex — aligned to design.md) ────────────────
   Primary:      #D9071C   Primary dark:  #B00618   Primary light:  #E85050
   Background:   #F5F7FA   Surface:       #FFFFFF   Cream paper:    #FFFDF8
   Ink:          #111827   Text taupe:    #7A6E63   Text stone:     #A09588
   Paper edge:   #E0D6C8
   Segment:      #4A90D9 #34D399 #F59E0B #EC4899 #8B5CF6
──────────────────────────────────────────────────────────────────────── */

/* ─── Wordmark Logo (speech-bubble lockup) ─── */
const TRYPS_LOGO_SRC = "/images/tryps-logo.png";
const TRYPS_LOGO_RATIO = 431 / 157;
const TrypsLogo = ({ height = 32, className = "" }: { height?: number; className?: string }) => (
  <img
    src={TRYPS_LOGO_SRC}
    alt="TRYPS"
    width={Math.round(height * TRYPS_LOGO_RATIO)}
    height={height}
    className={`block select-none ${className}`}
    draggable={false}
    decoding="async"
    loading="eager"
  />
);

/* ─── Section Eyebrow ─── */
type SectionEyebrowProps = {
  n: string;
  label: string;
  color?: string;
  className?: string;
};
const SectionEyebrow = ({ n, label, color = "#D9071C", className = "" }: SectionEyebrowProps) => (
  <div
    className={`inline-flex items-center justify-center gap-2.5 mb-4 text-xs font-black uppercase ${className}`}
    style={{ color, letterSpacing: "0.22em" }}
  >
    <span className="tabular-nums">SECTION {n}</span>
    <span className="w-8 h-px" style={{ background: color, opacity: 0.5 }} />
    <span>{label}</span>
  </div>
);

/* ─── iMessage Bubble ─── */
type IMessageBubbleProps = {
  side?: "in" | "out";
  children: ReactNode;
  className?: string;
  tilt?: string;
  style?: CSSProperties;
};
const IMessageBubble = ({ side = "in", children, className = "", tilt = "0deg", style = {} }: IMessageBubbleProps) => {
  const isOut = side === "out";
  return (
    <div
      className={`relative inline-block max-w-[240px] px-4 py-2.5 text-sm leading-snug ${className}`}
      style={{
        background: isOut ? "#0A84FF" : "#E9E9EB",
        color: isOut ? "#FFFFFF" : "#111827",
        borderRadius: isOut ? "20px 20px 6px 20px" : "20px 20px 20px 6px",
        transform: `rotate(${tilt})`,
        boxShadow: "0 6px 20px rgba(17,24,39,0.10)",
        fontWeight: 500,
        ...style,
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

/* ─── Polaroid ─── */
type PolaroidProps = {
  caption?: string;
  children?: ReactNode;
  tilt?: string;
  className?: string;
  width?: number;
  height?: number;
  photoBg?: string;
};
const Polaroid = ({
  caption,
  children,
  tilt = "-3deg",
  className = "",
  width = 180,
  height = 200,
  photoBg = "linear-gradient(135deg, #E85050 0%, #F59E0B 50%, #8B5CF6 100%)",
}: PolaroidProps) => (
  <div
    className={`inline-block p-3 pb-6 ${className}`}
    style={{
      background: "#FFFDF8",
      borderRadius: 4,
      transform: `rotate(${tilt})`,
      boxShadow: "0 18px 40px rgba(61,53,48,0.18), 0 2px 6px rgba(61,53,48,0.10)",
    }}
    aria-hidden="true"
  >
    <div className="overflow-hidden flex items-center justify-center" style={{ width, height, background: photoBg, borderRadius: 2 }}>
      {children}
    </div>
    {caption && (
      <p
        className="mt-3 text-center"
        style={{
          color: "#7A6E63",
          fontStyle: "italic",
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: "0.01em",
        }}
      >
        {caption}
      </p>
    )}
  </div>
);

/* ─── Sticky Note ─── */
type StickyNoteProps = {
  tone?: "yellow" | "cream" | "red" | "mint";
  tilt?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};
const StickyNote = ({ tone = "yellow", tilt = "-4deg", children, className = "", style = {} }: StickyNoteProps) => {
  const toneMap: Record<string, string> = {
    yellow: "#FFE875",
    cream: "#FFFDF8",
    red: "#F4C2C2",
    mint: "#C8EAD8",
  };
  return (
    <div
      className={`relative inline-block px-5 py-4 text-sm ${className}`}
      style={{
        background: toneMap[tone],
        color: "#111827",
        transform: `rotate(${tilt})`,
        boxShadow: "0 10px 24px rgba(61,53,48,0.14)",
        minWidth: 140,
        fontWeight: 600,
        lineHeight: 1.3,
        ...style,
      }}
      aria-hidden="true"
    >
      <span
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4"
        style={{ background: "rgba(217,7,28,0.28)", borderLeft: "1px dashed rgba(217,7,28,0.4)", borderRight: "1px dashed rgba(217,7,28,0.4)" }}
      />
      {children}
    </div>
  );
};

/* ─── Tape Strip ─── */
type TapeStripProps = { tilt?: string; className?: string; style?: CSSProperties; width?: number };
const TapeStrip = ({ tilt = "-2deg", className = "", style = {}, width = 96 }: TapeStripProps) => (
  <span
    className={`absolute h-5 ${className}`}
    style={{
      width,
      background: "rgba(217, 7, 28, 0.22)",
      transform: `rotate(${tilt})`,
      borderLeft: "1px dashed rgba(217,7,28,0.35)",
      borderRight: "1px dashed rgba(217,7,28,0.35)",
      ...style,
    }}
    aria-hidden="true"
  />
);

/* ─── Brand Mark (hand-drawn brushstroke accent) ─── */
type BrandMarkVariant = "11" | "12" | "13";
type BrandMarkProps = {
  variant: BrandMarkVariant;
  className?: string;
  style?: CSSProperties;
  width?: number;
  tilt?: string;
  tone?: "red" | "white";
  opacity?: number;
};
const BRAND_MARK_RATIO = 480 / 420; // intrinsic aspect
const BrandMark = ({
  variant,
  className = "",
  style = {},
  width = 120,
  tilt = "0deg",
  tone = "red",
  opacity = 1,
}: BrandMarkProps) => (
  <img
    src={`/brand-elements/branding-${variant}.png`}
    alt=""
    width={width}
    height={Math.round(width / BRAND_MARK_RATIO)}
    draggable={false}
    aria-hidden="true"
    loading="lazy"
    decoding="async"
    className={`block pointer-events-none select-none ${className}`}
    style={{
      transform: `rotate(${tilt})`,
      opacity,
      filter: tone === "white" ? "brightness(0) invert(1)" : undefined,
      ...style,
    }}
  />
);

/* ─── Boarding Pass ─── */
type BoardingPassProps = {
  from?: string;
  to?: string;
  date?: string;
  tilt?: string;
  className?: string;
  style?: CSSProperties;
};
const BoardingPass = ({ from = "NYC", to = "NAP", date = "JUN 14", tilt = "3deg", className = "", style = {} }: BoardingPassProps) => (
  <div
    className={`inline-flex items-stretch overflow-hidden ${className}`}
    style={{
      background: "#FFFFFF",
      border: "1.5px solid #E0D6C8",
      borderRadius: 10,
      transform: `rotate(${tilt})`,
      boxShadow: "0 14px 32px rgba(61,53,48,0.14)",
      ...style,
    }}
    aria-hidden="true"
  >
    <div className="px-3 py-2.5 flex flex-col justify-center text-center" style={{ background: "#D9071C", color: "white", minWidth: 54 }}>
      <p className="text-[9px] font-black uppercase tracking-widest opacity-85 leading-none">BOARDING</p>
      <p className="text-sm font-black tabular-nums leading-none mt-1">TR 0614</p>
    </div>
    <div className="px-3 py-2">
      <div className="flex items-center gap-2">
        <div>
          <p className="text-[9px] uppercase tracking-widest font-black" style={{ color: "#A09588" }}>From</p>
          <p className="text-base font-black tabular-nums leading-none" style={{ color: "#111827" }}>{from}</p>
        </div>
        <Plane className="h-3 w-3" style={{ color: "#D9071C" }} />
        <div>
          <p className="text-[9px] uppercase tracking-widest font-black" style={{ color: "#A09588" }}>To</p>
          <p className="text-base font-black tabular-nums leading-none" style={{ color: "#111827" }}>{to}</p>
        </div>
      </div>
      <p className="text-[10px] font-bold mt-1 tabular-nums" style={{ color: "#7A6E63", letterSpacing: "0.08em" }}>{date}</p>
    </div>
  </div>
);

/* ─── Calendar Page ─── */
type CalendarPageProps = {
  month?: string;
  day?: string;
  tilt?: string;
  className?: string;
  style?: CSSProperties;
  size?: number;
};
const CalendarPage = ({ month = "JUN", day = "14", tilt = "-6deg", className = "", style = {}, size = 84 }: CalendarPageProps) => (
  <div
    className={`inline-block overflow-hidden ${className}`}
    style={{
      background: "#FFFFFF",
      border: "1.5px solid #E0D6C8",
      borderRadius: 10,
      width: size,
      transform: `rotate(${tilt})`,
      boxShadow: "0 14px 32px rgba(61,53,48,0.14)",
      ...style,
    }}
    aria-hidden="true"
  >
    <div className="px-3 py-1.5 text-center" style={{ background: "#D9071C", color: "#FFFFFF" }}>
      <p className="text-xs font-black uppercase tracking-widest leading-none">{month}</p>
    </div>
    <div className="py-3 text-center">
      <p className="text-4xl font-black tabular-nums leading-none" style={{ color: "#111827", letterSpacing: "-0.03em" }}>{day}</p>
    </div>
  </div>
);

/* ─── International phone helpers (libphonenumber-js) ─── */
type CountryInfo = {
  code: CountryCode;
  name: string;
  dialCode: string;
  flag: string;
};

const countryCodeToFlag = (code: string): string =>
  code
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));

const COUNTRIES: CountryInfo[] = (() => {
  const displayNames =
    typeof Intl !== "undefined" && "DisplayNames" in Intl
      ? new Intl.DisplayNames(["en"], { type: "region" })
      : null;
  return getCountries()
    .map<CountryInfo>((code) => ({
      code,
      name: displayNames?.of(code) ?? code,
      dialCode: `+${getCountryCallingCode(code)}`,
      flag: countryCodeToFlag(code),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
})();

const COUNTRY_BY_CODE: Record<string, CountryInfo> = Object.fromEntries(
  COUNTRIES.map((c) => [c.code, c]),
);

const detectDefaultCountry = (): CountryCode => {
  if (typeof navigator === "undefined") return "US";
  const langs =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language || ""];
  for (const lang of langs) {
    const region = lang.split("-")[1]?.toUpperCase();
    if (region && COUNTRY_BY_CODE[region]) return region as CountryCode;
  }
  return "US";
};

const formatPhoneForCountry = (value: string, country: CountryCode): string =>
  new AsYouType(country).input(value);

const getPlaceholderForCountry = (country: CountryCode): string => {
  try {
    const example = getExampleNumber(country, phoneExamples);
    return example?.formatNational() ?? "Mobile number";
  } catch {
    return "Mobile number";
  }
};

// Trim trailing digits until libphonenumber-js no longer considers the number
// TOO_LONG for the selected country. This is the authoritative per-country cap
// — works for countries with fixed or variable valid lengths.
const clampDigitsToCountry = (
  digits: string,
  country: CountryCode,
  hasLeadingPlus: boolean,
): string => {
  let trimmed = digits;
  while (trimmed.length > 0) {
    const candidate = hasLeadingPlus ? `+${trimmed}` : trimmed;
    if (validatePhoneNumberLength(candidate, country) !== "TOO_LONG") break;
    trimmed = trimmed.slice(0, -1);
  }
  return trimmed;
};

// Loose <input maxLength> — first line of defense against paste/autofill.
// The JS clamp above is the authoritative cap, so this just needs to be a
// comfortable upper bound on the formatted string's length.
const getMaxInputLengthForCountry = (country: CountryCode): number => {
  try {
    const example = getExampleNumber(country, phoneExamples);
    if (!example) return 18;
    const formattedLength = example.formatNational().length;
    return formattedLength + 2;
  } catch {
    return 18;
  }
};

type PhoneValidity = "empty" | "too-short" | "too-long" | "invalid" | "valid";

const getPhoneValidity = (
  phone: string,
  country: CountryCode,
): PhoneValidity => {
  if (!phone.trim()) return "empty";
  const lengthStatus = validatePhoneNumberLength(phone, country);
  if (lengthStatus === "TOO_SHORT") return "too-short";
  if (lengthStatus === "TOO_LONG") return "too-long";
  if (lengthStatus === "INVALID_LENGTH") return "invalid";
  const parsed = parsePhoneNumberFromString(phone, country);
  return parsed?.isValid() ? "valid" : "invalid";
};

const PHONE_HINT_MESSAGES: Record<Exclude<PhoneValidity, "empty" | "valid">, string> = {
  "too-short": "Keep typing — that number looks too short for the selected country.",
  "too-long": "That number is too long for the selected country.",
  invalid: "That doesn't look like a valid number for the selected country.",
};

/* ─── Country Picker (searchable dropdown) ─── */
type CountryPickerProps = {
  country: CountryCode;
  onSelect: (code: CountryCode) => void;
  disabled?: boolean;
};

const CountryPicker = ({ country, onSelect, disabled }: CountryPickerProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = COUNTRY_BY_CODE[country] ?? COUNTRIES[0];

  useEffect(() => {
    if (!open) return;
    const handlePointer = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (popoverRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const raf = requestAnimationFrame(() => searchRef.current?.focus());
    return () => cancelAnimationFrame(raf);
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q),
    );
  }, [query]);

  const handleToggle = () => {
    if (disabled) return;
    setOpen((prev) => !prev);
  };

  const handleSelect = (code: CountryCode) => {
    onSelect(code);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Select country. Current: ${selected.name} ${selected.dialCode}`}
        disabled={disabled}
        onClick={handleToggle}
        className="flex items-center gap-1.5 px-4 h-full shrink-0 select-none disabled:opacity-60"
        style={{ borderRight: "1.5px solid #E0D6C8" }}
      >
        <span className="text-base leading-none" aria-hidden="true">
          {selected.flag}
        </span>
        <span className="text-sm font-bold" style={{ color: "#111827" }}>
          {selected.dialCode}
        </span>
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform"
          style={{
            color: "#7A6E63",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label="Select country"
          className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-white shadow-xl z-50 overflow-hidden"
          style={{ border: "1.5px solid #E0D6C8" }}
        >
          <div className="p-2" style={{ borderBottom: "1px solid #E0D6C8" }}>
            <label htmlFor="country-search" className="sr-only">
              Search countries
            </label>
            <input
              id="country-search"
              ref={searchRef}
              type="search"
              autoComplete="off"
              placeholder="Search country or code"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg outline-none"
              style={{ background: "#F5F7FA", color: "#111827" }}
            />
          </div>

          <ul
            role="listbox"
            aria-label="Countries"
            className="max-h-64 overflow-y-auto py-1"
          >
            {filtered.length === 0 ? (
              <li
                className="px-4 py-3 text-sm"
                style={{ color: "#7A6E63" }}
              >
                No matches
              </li>
            ) : (
              filtered.map((c) => {
                const isSelected = c.code === country;
                return (
                  <li key={c.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(c.code)}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-[#F5F7FA] focus:bg-[#F5F7FA] focus:outline-none"
                      style={{
                        color: "#111827",
                        background: isSelected
                          ? "rgba(217,7,28,0.06)"
                          : undefined,
                      }}
                    >
                      <span className="text-base leading-none" aria-hidden="true">
                        {c.flag}
                      </span>
                      <span className="flex-1 truncate">{c.name}</span>
                      <span
                        className="tabular-nums"
                        style={{ color: "#7A6E63" }}
                      >
                        {c.dialCode}
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

/* ─── Tryps AI SMS deep link ─── */
const TRYPS_SMS_NUMBER = "+19177453624";
const TRYPS_SMS_BODY = "Hey Tryps";

const buildTrypsSmsUrl = () => {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const separator = isIOS ? "&" : "?";
  return `sms:${TRYPS_SMS_NUMBER}${separator}body=${encodeURIComponent(TRYPS_SMS_BODY)}`;
};

/* ─── Unified Tryps SMS CTA ─── */
type TrypsSmsCTAProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  ariaLabel?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};
const TrypsSmsCTA = ({ className = "", style, children, ariaLabel, onMouseEnter, onMouseLeave }: TrypsSmsCTAProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href = buildTrypsSmsUrl();
    }
  };
  return (
    <a
      href="#waitlist"
      onClick={handleClick}
      className={className}
      style={style}
      aria-label={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

/* ─── Waitlist Form ─── */
const PhoneCaptureHero = () => {
  const [country, setCountry] = useState<CountryCode>("US");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const detected = detectDefaultCountry();
    if (detected !== "US") setCountry(detected);
  }, []);

  const parsed = useMemo(
    () => parsePhoneNumberFromString(phone, country),
    [phone, country],
  );
  const validity = useMemo(
    () => getPhoneValidity(phone, country),
    [phone, country],
  );
  const isValid = validity === "valid";
  const placeholder = useMemo(
    () => getPlaceholderForCountry(country),
    [country],
  );
  const maxInputLength = useMemo(
    () => getMaxInputLengthForCountry(country),
    [country],
  );
  const selectedCountry = COUNTRY_BY_CODE[country] ?? COUNTRIES[0];

  const showInvalid = touched && validity !== "empty" && validity !== "valid";
  const hintMessage =
    validity === "empty" || validity === "valid"
      ? null
      : PHONE_HINT_MESSAGES[validity];

  const handlePhoneChange = (value: string) => {
    // Let libphonenumber-js decide what "too long" means for the selected
    // country and trim accordingly. The <input> can never hold more digits
    // than the country allows — regardless of keystroke, paste, or autofill.
    const hasLeadingPlus = value.trimStart().startsWith("+");
    const digitsOnly = value.replace(/\D/g, "");
    const clampedDigits = clampDigitsToCountry(digitsOnly, country, hasLeadingPlus);
    const source = hasLeadingPlus ? `+${clampedDigits}` : clampedDigits;
    setPhone(formatPhoneForCountry(source, country));
    if (error) setError("");
  };

  const handleCountryChange = (next: CountryCode) => {
    setCountry(next);
    setError("");
    const digits = phone.replace(/\D/g, "");
    const clampedDigits = clampDigitsToCountry(digits, next, false);
    setPhone(clampedDigits ? formatPhoneForCountry(clampedDigits, next) : "");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);
    if (!parsed || !isValid) {
      setError("Please enter a valid phone number for the selected country.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      void fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          countryCode: `+${getCountryCallingCode(country)}`,
          phoneNumber: parsed.nationalNumber,
          e164: parsed.number,
          country,
          intent: "open_messages",
        }),
        keepalive: true,
      }).catch(() => {});
    } catch {
    }

    try {
      window.location.href = buildTrypsSmsUrl();
      setSubmitted(true);
    } catch {
      setError("Could not open Messages. Text Hey Tryps to +1 (917) 745-3624 to get started.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col gap-3 mb-10">
        <div
          className="flex items-center gap-3 rounded-2xl px-5 py-4 max-w-sm shadow-md"
          style={{ background: "rgba(217,7,28,0.08)", border: "1px solid #E0D6C8" }}
        >
          <CheckCircle2 className="h-6 w-6 shrink-0" style={{ color: "#D9071C" }} />
          <div>
            <p className="text-sm font-bold" style={{ color: "#111827" }}>Messages is opening…</p>
            <p className="text-xs mt-0.5" style={{ color: "#7A6E63" }}>
              Tap send on <span className="font-bold tabular-nums">“Hey Tryps”</span> and we'll take it from there.
            </p>
          </div>
        </div>
        <p className="text-xs pl-2" style={{ color: "#7A6E63" }}>
          Nothing opened?{" "}
          <a
            href={buildTrypsSmsUrl()}
            className="font-semibold underline"
            style={{ color: "#D9071C" }}
          >
            Text Hey Tryps to +1 (917) 745-3624
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 mb-10 w-full max-w-sm" id="waitlist">
      <p className="text-sm font-bold" style={{ color: "#111827" }}>
        Join <span style={{ color: "#D9071C" }}>500+</span> groups already planning trips
      </p>

      <form
        role="form"
        aria-label="Join TRYPS early access — enter your mobile number to plan group trips"
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-sm"
      >
        <label htmlFor="hero-phone" className="sr-only">
          Your mobile number to join the TRYPS group trip planning app waitlist
        </label>

        <div
          className="flex items-stretch bg-white rounded-full overflow-visible shadow-md transition-colors"
          style={{
            border: `1.5px solid ${showInvalid ? "#D14343" : "#E0D6C8"}`,
          }}
        >
          <CountryPicker
            country={country}
            onSelect={handleCountryChange}
            disabled={loading}
          />

          <input
            id="hero-phone"
            type="tel"
            autoComplete="tel-national"
            inputMode="tel"
            placeholder={placeholder}
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            onBlur={() => setTouched(true)}
            aria-invalid={showInvalid}
            aria-describedby={
              error
                ? "hero-phone-error"
                : hintMessage
                  ? "hero-phone-hint"
                  : undefined
            }
            maxLength={maxInputLength}
            className="flex-1 min-w-0 px-4 py-3.5 text-sm outline-none bg-transparent"
            style={{ color: "#111827" }}
            required
            disabled={loading}
          />

          <button
            type="submit"
            aria-label={`Join TRYPS — opens Messages to text Hey Tryps to the TRYPS AI planner. Sending from ${selectedCountry.name} ${selectedCountry.dialCode}.`}
            disabled={loading || !isValid}
            className="text-white text-sm font-black px-6 py-3 rounded-full m-1 transition-all shrink-0 shadow-lg disabled:opacity-60 hover:scale-105 active:scale-95"
            style={{ background: "#D9071C", boxShadow: "0 4px 20px rgba(217,7,28,0.30)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#B00618")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#D9071C")}
          >
            {loading ? "..." : "Join"}
          </button>
        </div>

        {error ? (
          <p
            id="hero-phone-error"
            role="alert"
            className="text-xs pl-2 flex items-center gap-1.5"
            style={{ color: "#D14343" }}
          >
            <XCircle className="h-3.5 w-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        ) : hintMessage ? (
          <p
            id="hero-phone-hint"
            aria-live="polite"
            className="text-xs pl-2 flex items-center gap-1.5"
            style={{ color: showInvalid ? "#D14343" : "#7A6E63" }}
          >
            {showInvalid ? (
              <XCircle className="h-3.5 w-3.5 shrink-0" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#7A6E63" }} aria-hidden="true" />
            )}
            <span>{hintMessage}</span>
          </p>
        ) : null}

        <p className="text-xs pl-2 flex items-center gap-1.5" style={{ color: "#7A6E63" }}>
          <span aria-hidden="true">💬</span>
          <span>
            Opens Messages with <span className="font-semibold" style={{ color: "#111827" }}>“Hey Tryps”</span> ready to send. No app download, no spam.
          </span>
        </p>
      </form>

      <div className="flex items-center gap-2 pl-1">
        <div className="flex -space-x-2">
          {["#D9071C", "#B00618", "#E85050", "#4A90D9", "#34D399"].map((bg, i) => (
            <div
              key={i}
              style={{ background: bg, border: "2px solid #F5F7FA", zIndex: 5 - i }}
              className="relative w-7 h-7 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs font-bold">
                {["A", "R", "K", "S", "M"][i]}
              </span>
            </div>
          ))}
        </div>
        <span className="text-xs tabular-nums" style={{ color: "#7A6E63" }}>500+ groups waiting</span>
      </div>
    </div>
  );
};

/* ─── Hero Phone Mockup — iMessage thread with Tryps ──────────────────
   Source asset: /public/images/iMessage.png is a *full* iPhone mockup
   (intrinsic 728 × 1471, ratio ≈ 0.495). Sized to match the app-mockup
   scale used elsewhere on the site (~240–260 px wide → ~485–525 px
   tall) so the phone reads as one element in the scrapbook, not the
   only thing in it. */
const HERO_PHONE_INTRINSIC_W = 728;
const HERO_PHONE_INTRINSIC_H = 1471;
const HeroMockup = () => (
  <div className="relative w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[260px] mx-auto">
    <div
      className="absolute inset-0 rounded-[3rem] blur-3xl pointer-events-none scale-95 translate-y-6"
      style={{ background: "radial-gradient(ellipse at center, rgba(217,7,28,0.22) 0%, rgba(232,80,80,0.12) 60%, transparent 100%)" }}
      aria-hidden="true"
    />
    <img
      src="/images/iMessage.png"
      alt="TRYPS in iMessage — user texts Hey Tryps and receives a Hollywood Trip link preview with a May date poll"
      width={HERO_PHONE_INTRINSIC_W}
      height={HERO_PHONE_INTRINSIC_H}
      sizes="(min-width: 1024px) 260px, (min-width: 640px) 240px, 220px"
      className="relative block w-full h-auto drop-shadow-2xl animate-float-steady"
      loading="eager"
      decoding="async"
      // @ts-expect-error — fetchPriority is valid HTML, not yet in React types
      fetchpriority="high"
      draggable={false}
    />
  </div>
);

/* ─── Hero Scrapbook Collage ───────────────────────────────────────────
   Single iMessage phone at app-mockup scale, surrounded by brand props:
   floating chat bubbles top-right, boarding pass mid-right, polaroid
   bottom-right, sticky note bottom-left, brushstroke behind. */
const HeroCollage = () => (
  <div className="relative w-full max-w-[480px] mx-auto min-h-[560px] sm:min-h-[600px] lg:min-h-[640px]">
    {/* Floating chat bubbles — top-right, narrating the group-chat moment */}
    <div
      className="absolute -top-2 right-2 sm:right-6 z-30 hidden md:block animate-tilt"
      style={{ ["--tilt" as unknown as string]: "4deg" } as CSSProperties}
    >
      <IMessageBubble side="out" tilt="4deg">
        hey — Amalfi in June?
      </IMessageBubble>
    </div>
    <div
      className="absolute top-14 right-0 sm:right-10 z-30 hidden md:block animate-tilt"
      style={{ ["--tilt" as unknown as string]: "-3deg" } as CSSProperties}
    >
      <IMessageBubble side="in" tilt="-3deg">
        i'm in if we pick dates this week
      </IMessageBubble>
    </div>

    {/* Center phone — the hero iMessage mockup */}
    <div className="relative z-20 flex justify-center pt-12 sm:pt-16">
      <HeroMockup />
    </div>

    {/* Boarding pass — sits high on the right so it clears the Hollywood
        link-preview card in the chat. Pushed further outside the column
        edge so the overlap with the phone is just the bezel, not the screen. */}
    <div
      className="absolute top-[20%] -right-10 lg:-right-14 z-30 hidden md:block animate-tilt"
      style={{ ["--tilt" as unknown as string]: "8deg" } as CSSProperties}
    >
      <BoardingPass from="JFK" to="LAX" date="MAY 8 · 7:20 AM" tilt="8deg" />
    </div>

    {/* Sticky note — pulled further left so it leans against the phone
        from outside, instead of taping over the chat input bar */}
    <div className="absolute bottom-6 -left-4 sm:-left-8 lg:-left-10 z-30">
      <StickyNote
        tone="yellow"
        tilt="-7deg"
        className="animate-tilt"
        style={{ ["--tilt" as unknown as string]: "-7deg" } as CSSProperties}
      >
        Lock dates <br /> by Sun ✱
      </StickyNote>
    </div>

    {/* Polaroid — peeking off the lower-right corner of the phone */}
    <div
      className="absolute -bottom-2 right-0 sm:-right-2 z-30 animate-tilt"
      style={{ ["--tilt" as unknown as string]: "6deg" } as CSSProperties}
    >
      <Polaroid
        tilt="6deg"
        width={150}
        height={170}
        caption="Hollywood — May 2026"
        photoBg="linear-gradient(160deg, #F59E0B 0%, #E85050 50%, #8B5CF6 100%)"
      >
        <svg
          className="h-16 w-16 text-white/85"
          viewBox="0 0 64 48"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="14" cy="38" r="5.5" />
          <circle cx="50" cy="38" r="5.5" />
          <path d="M6 38 C6 28 10 22 18 22 L30 22" />
          <path d="M30 22 L36 22 C42 22 46 18 46 12 L46 6" />
          <path d="M40 6 L54 6" />
          <path d="M46 12 C52 16 56 26 56 38" />
          <circle cx="45" cy="13" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      </Polaroid>
    </div>
  </div>
);

/* ─── Product Flow Preview ─── */
const ProductPreview = () => {
  const panels = [
    {
      label: "iMessage invite",
      icon: MessageCircle,
      color: "#D9071C",
      content: (
        <div className="space-y-2 mt-3">
          <div className="rounded-xl p-3 text-left" style={{ background: "rgba(217,7,28,0.08)" }}>
            <p className="text-xs font-semibold" style={{ color: "#F5F5F5" }}>Hey! Join our Amalfi trip</p>
            <p className="text-xs mt-0.5 tabular-nums" style={{ color: "#AEAEB2" }}>trypsagent.com/amalfi-2025</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: "#D9071C" }}>A</div>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: "#4A90D9" }}>B</div>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: "#34D399" }}>C</div>
            <span className="text-xs tabular-nums" style={{ color: "#AEAEB2" }}>6 joined</span>
          </div>
        </div>
      ),
    },
    {
      label: "Date poll",
      icon: Calendar,
      color: "#4A90D9",
      content: (
        <div className="space-y-1.5 mt-3">
          {[
            { date: "Jun 14–18", w: "80%", best: true },
            { date: "Jun 21–25", w: "50%", best: false },
            { date: "Jul 5–9",   w: "30%", best: false },
          ].map((d, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="tabular-nums" style={{ color: d.best ? "#FF6B6B" : "#AEAEB2", fontWeight: d.best ? 700 : 400 }}>{d.date}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: d.w, background: d.best ? "#D9071C" : "#4A90D9" }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Shared itinerary",
      icon: MapPin,
      color: "#34D399",
      content: (
        <div className="space-y-1.5 mt-3">
          {[
            { time: "10:00", item: "Arrive + check in" },
            { time: "13:00", item: "Lunch by the sea" },
            { time: "15:30", item: "Positano walk" },
            { time: "20:00", item: "Group dinner" },
          ].map((e, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-xs w-8 shrink-0 tabular-nums" style={{ color: "#AEAEB2" }}>{e.time}</span>
              <span className="text-xs font-medium" style={{ color: "#F5F5F5" }}>{e.item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Expense summary",
      icon: Wallet,
      color: "#8B5CF6",
      content: (
        <div className="space-y-1.5 mt-3">
          {[
            { label: "Flights",    amt: "$840" },
            { label: "Hotel",      amt: "$620" },
            { label: "Activities", amt: "$220" },
          ].map((e, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-xs" style={{ color: "#AEAEB2" }}>{e.label}</span>
              <span className="text-xs font-bold tabular-nums" style={{ color: "#F5F5F5" }}>{e.amt}</span>
            </div>
          ))}
          <div className="pt-1.5 flex justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <span className="text-xs font-bold" style={{ color: "#34D399" }}>All settled</span>
            <span className="text-xs font-black tabular-nums" style={{ color: "#F5F5F5" }}>$1,680</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {panels.map((p, i) => (
        <div key={i} className="relative rounded-2xl p-4 overflow-hidden" style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="absolute top-0 left-0 h-1 w-full" style={{ background: p.color }} aria-hidden="true" />
          <div className="flex items-center gap-2 mb-1 mt-1">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${p.color}22` }}>
              <p.icon className="h-3.5 w-3.5" style={{ color: p.color }} />
            </div>
            <span className="text-xs font-black uppercase tracking-wider" style={{ color: p.color }}>{p.label}</span>
          </div>
          {p.content}
        </div>
      ))}
    </div>
  );
};

/* ─── Scrolling Marquee ─── */
const MARQUEE_ITEMS: Array<{ label: string; icon?: React.ComponentType<{ className?: string }> }> = [
  { label: "No app download required", icon: Sparkles },
  { label: "500+ groups planning" },
  { label: "Lock dates in one poll", icon: Calendar },
  { label: "One link, everyone in" },
  { label: "Split expenses cleanly", icon: Wallet },
  { label: "No sign-up for invitees" },
  { label: "Dates locked in minutes", icon: Calendar },
  { label: "Works via iMessage", icon: MessageCircle },
];

const TrustMarquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section
      aria-labelledby="trust-marquee-title"
      className="py-5 overflow-hidden"
      style={{ background: "#FFFFFF", borderTop: "1px solid #E0D6C8", borderBottom: "1px solid #E0D6C8" }}
    >
      <h2 id="trust-marquee-title" className="sr-only">How TRYPS makes group trip coordination work</h2>
      <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-semibold" style={{ color: "#7A6E63" }}>
              {Icon ? (
                <Icon className="h-3.5 w-3.5 shrink-0" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#D9071C" }} />
              )}
              {item.label}
            </span>
          );
        })}
      </div>
    </section>
  );
};

/* ─── Recipes ─── */
type Recipe = {
  tag: string;
  title: string;
  desc: string;
  href: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  seal: string;
};

const RECIPES: Recipe[] = [
  {
    tag: "01 / WEEKEND",
    title: "Weekend in the mountains",
    desc: "Two nights, four friends, zero planning spreadsheets.",
    href: "/weekend-trip-planning-checklist",
    gradient: "linear-gradient(160deg, #2B5F83 0%, #3D3530 100%)",
    icon: Mountain,
    seal: "2 NIGHTS",
  },
  {
    tag: "02 / BACHELOR / BACHELORETTE",
    title: "The bachelorette",
    desc: "Coordinate 8+ friends without becoming the event planner.",
    href: "/plan-a-goa-trip-with-friends",
    gradient: "linear-gradient(160deg, #EC4899 0%, #D9071C 100%)",
    icon: Sparkles,
    seal: "3 NIGHTS",
  },
  {
    tag: "03 / BEACH RESET",
    title: "Beach reset",
    desc: "Salt, sun, and a shared tab that settles itself.",
    href: "/plan-a-goa-trip-with-friends",
    gradient: "linear-gradient(160deg, #F59E0B 0%, #E85050 100%)",
    icon: Palmtree,
    seal: "5 NIGHTS",
  },
  {
    tag: "04 / EURO SUMMER",
    title: "Euro-summer loop",
    desc: "Paris → Lisbon → Barcelona — dates, stays, expenses in one place.",
    href: "/group-trip-planning-guide",
    gradient: "linear-gradient(160deg, #8B5CF6 0%, #4A90D9 100%)",
    icon: Compass,
    seal: "10 NIGHTS",
  },
  {
    tag: "05 / ROAD TRIP",
    title: "Road trip",
    desc: "Who drives, who fills up gas, who picks the playlist — all tracked.",
    href: "/plan-a-manali-trip-with-friends",
    gradient: "linear-gradient(160deg, #2D6B4F 0%, #111827 100%)",
    icon: MapIcon,
    seal: "4 NIGHTS",
  },
  {
    tag: "06 / BIRTHDAY",
    title: "Birthday takeover",
    desc: "Surprise a friend without group-chat leaks.",
    href: "/plan-a-pondicherry-trip-with-friends",
    gradient: "linear-gradient(160deg, #D9071C 0%, #B00618 100%)",
    icon: Heart,
    seal: "3 NIGHTS",
  },
];

const RecipesSection = () => (
  <section
    id="recipes"
    aria-labelledby="recipes-title"
    className="py-16 md:py-28 relative overflow-hidden"
    style={{ background: "#FFFDF8", borderTop: "1px solid rgba(224,214,200,0.5)" }}
  >
    <TapeStrip tilt="-4deg" className="top-6 left-6" width={120} />
    <TapeStrip tilt="3deg" className="top-8 right-10" width={96} />

    {/* Brand brushstrokes — playful scribble accent */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
      <BrandMark variant="12" width={110} tilt="-4deg" opacity={0.28} />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <SectionEyebrow n="05" label="TRYPS RECIPES" />
        <h2
          id="recipes-title"
          className="font-black tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#111827" }}
        >
          Start with a trip shape, not a blank page
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#7A6E63" }}>
          Pick a recipe. We'll scaffold the dates, itinerary, and splits so your group can just fill in the blanks.
        </p>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 mb-10">
        {RECIPES.map((r, i) => {
          const Icon = r.icon;
          const tilts = ["-1.5deg", "0.5deg", "-0.5deg", "1deg", "-1deg", "0.8deg"];
          return (
            <li
              key={r.tag}
              className="group relative rounded-3xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #E0D6C8",
                transform: `rotate(${tilts[i % tilts.length]})`,
                boxShadow: "0 4px 12px rgba(61,53,48,0.08)",
              }}
            >
              <span
                className="absolute -top-3 -right-3 z-10 rounded-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest tabular-nums text-white"
                style={{
                  background: "#D9071C",
                  width: 58,
                  height: 58,
                  transform: "rotate(12deg)",
                  boxShadow: "0 6px 16px rgba(217,7,28,0.30)",
                  border: "2px dashed rgba(255,255,255,0.5)",
                }}
                aria-hidden="true"
              >
                {r.seal}
              </span>

              <div
                className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 flex items-center justify-center"
                style={{ background: r.gradient }}
              >
                <Icon className="h-16 w-16 text-white/85" aria-hidden="true" />
                <span
                  className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-widest text-white/90 tabular-nums px-2 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
                >
                  {r.tag}
                </span>
              </div>

              <h3 className="text-lg font-black mb-1.5" style={{ color: "#111827" }}>{r.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#7A6E63" }}>{r.desc}</p>

              <a
                href={r.href}
                className="inline-flex items-center gap-1.5 text-sm font-bold hover:gap-2.5 transition-all"
                style={{ color: "#D9071C" }}
                aria-label={`Start the ${r.title} recipe`}
              >
                Start this trip
                <ArrowRight className="h-4 w-4" />
              </a>
            </li>
          );
        })}
      </ul>

      <div className="text-center">
        <a
          href="#waitlist"
          className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
          style={{ color: "#7A6E63" }}
        >
          Want a recipe that's not here?
          <span style={{ color: "#D9071C" }}>Tell us what you'd plan</span>
          <ArrowRight className="h-4 w-4" style={{ color: "#D9071C" }} />
        </a>
      </div>
    </div>
  </section>
);

/* ─── Plays Nicely With ─── */
type Integration = { name: string; icon: React.ComponentType<{ className?: string }>; color: string };

const INTEGRATIONS_A: Integration[] = [
  { name: "iMessage",        icon: MessageCircle, color: "#0A84FF" },
  { name: "SMS",             icon: MessageCircle, color: "#34C759" },
  { name: "WhatsApp",        icon: MessageCircle, color: "#25D366" },
  { name: "Google Calendar", icon: CalendarDays,  color: "#4285F4" },
  { name: "Apple Calendar",  icon: Calendar,      color: "#D14343" },
  { name: "Apple Wallet",    icon: Wallet,        color: "#111827" },
];

const INTEGRATIONS_B: Integration[] = [
  { name: "Google Maps",     icon: MapIcon,       color: "#34D399" },
  { name: "Airbnb",          icon: Heart,         color: "#EC4899" },
  { name: "Booking.com",     icon: Ticket,        color: "#003B95" },
  { name: "Splitwise",       icon: DollarSign,    color: "#2D6B4F" },
  { name: "Venmo",           icon: Wallet,        color: "#008CFF" },
  { name: "Spotify",         icon: Music,         color: "#1DB954" },
  { name: "Camera Roll",     icon: Camera,        color: "#F59E0B" },
  { name: "Contacts",        icon: UsersIcon,     color: "#D9071C" },
];

type IntegrationChipProps = { integration: Integration };
const IntegrationChip = ({ integration }: IntegrationChipProps) => {
  const Icon = integration.icon;
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full shrink-0"
      style={{ background: "#FFFFFF", border: "1.5px solid #E0D6C8", boxShadow: "0 2px 8px rgba(61,53,48,0.06)" }}
    >
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
        style={{ background: `${integration.color}18` }}
      >
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="text-sm font-bold" style={{ color: "#111827" }}>{integration.name}</span>
    </span>
  );
};

const IntegrationsSection = () => {
  const rowA = [...INTEGRATIONS_A, ...INTEGRATIONS_A];
  const rowB = [...INTEGRATIONS_B, ...INTEGRATIONS_B];
  return (
    <section
      id="integrations"
      aria-labelledby="integrations-title"
      className="py-16 md:py-24 overflow-hidden"
      style={{ background: "#F5F7FA", borderTop: "1px solid rgba(224,214,200,0.4)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <SectionEyebrow n="07" label="PLAYS NICELY WITH" />
        <h2
          id="integrations-title"
          className="font-black tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#111827" }}
        >
          Lives where your group already lives
        </h2>
        <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#7A6E63" }}>
          No "please switch to our app." TRYPS slides into the apps your group is already using.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3 animate-marquee-slow whitespace-nowrap" aria-hidden="true">
          {rowA.map((i, idx) => <IntegrationChip key={`a-${idx}`} integration={i} />)}
        </div>
        <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap" aria-hidden="true">
          {rowB.map((i, idx) => <IntegrationChip key={`b-${idx}`} integration={i} />)}
        </div>
      </div>

      <ul className="sr-only">
        {[...INTEGRATIONS_A, ...INTEGRATIONS_B].map(i => <li key={i.name}>{i.name}</li>)}
      </ul>
    </section>
  );
};

/* ─── Main Page ─── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans" style={{ background: "#F5F7FA", color: "#111827" }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-bold"
        style={{ background: "#D9071C" }}
      >
        Skip to content
      </a>

      {/* ── HEADER / NAV ── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{ background: "rgba(245,247,250,0.96)", borderBottom: "1px solid rgba(224,214,200,0.5)" }}
      >
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
          <a
            href="/"
            className="flex items-center gap-2.5"
            aria-label="TRYPS home"
          >
            <TrypsLogo height={32} />
            <span className="sr-only">TRYPS</span>
            <span
              className="hidden sm:inline-flex items-center text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-sm tabular-nums"
              style={{ background: "#111827", color: "#FFFDF8", letterSpacing: "0.18em" }}
            >
              BETA
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 font-medium text-sm" style={{ color: "#7A6E63" }}>
            <a href="#features" className="hover:text-[#D9071C] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[#D9071C] transition-colors">How it works</a>
            <a href="#recipes" className="hover:text-[#D9071C] transition-colors">Recipes</a>
            <a href="#faq" className="hover:text-[#D9071C] transition-colors">FAQ</a>
            <a href="/group-trip-planning-guide" className="hover:text-[#D9071C] transition-colors">Guide</a>
            <a href="/blog" className="hover:text-[#D9071C] transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-md inline-flex items-center gap-1.5"
              style={{ background: "#D9071C", boxShadow: "0 4px 16px rgba(217,7,28,0.25)" }}
              aria-label="Text Hey Tryps to start planning"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Text Hey Tryps
            </a>
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl transition-colors"
              style={{ color: "#D9071C" }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4L16 16M16 4L4 16" stroke="#D9071C" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="#D9071C" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        <div
          id="mobile-nav"
          className="md:hidden"
          role="dialog"
          aria-label="Navigation menu"
          hidden={!menuOpen}
          style={{ borderTop: "1px solid rgba(224,214,200,0.6)", background: "#F5F7FA" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            {[
              { href: "#features",     label: "Features" },
              { href: "#how-it-works", label: "How it works" },
              { href: "#recipes",      label: "Recipes" },
              { href: "#faq",          label: "FAQ" },
              { href: "/group-trip-planning-guide", label: "Guide" },
              { href: "/blog",         label: "Blog" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center px-4 py-3.5 rounded-2xl font-semibold transition-colors text-base hover:text-[#D9071C]"
                style={{ color: "#7A6E63" }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="mt-3 pt-4" style={{ borderTop: "1px solid rgba(224,214,200,0.6)" }}>
              <a
                href="#waitlist"
                className="flex justify-center items-center gap-2 w-full text-white font-bold text-base px-5 py-3.5 rounded-2xl shadow-md transition-all hover:scale-105"
                style={{ background: "#D9071C" }}
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Text Hey Tryps →
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section aria-labelledby="hero-title" className="relative pt-12 md:pt-20 pb-16 md:pb-28 overflow-hidden">
          {/* Background orbs */}
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none"
            style={{ background: "rgba(232,80,80,0.10)" }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"
            style={{ background: "rgba(217,7,28,0.07)" }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left */}
              <div className="pt-4 text-center lg:text-left">
                <SectionEyebrow n="00" label="Say hey to TRYPS" className="mb-5" />

                <h1
                  id="hero-title"
                  className="font-black tracking-tight mb-5 md:mb-6 text-balance"
                  style={{ fontSize: "clamp(2.6rem, 5.5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111827" }}
                >
                  The trip stuck in the group chat.{" "}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #D9071C 0%, #E85050 100%)" }}>
                    Finally planned.
                  </span>
                </h1>

                <p className="text-base md:text-lg leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0" style={{ color: "#7A6E63" }}>
                  TRYPS gets your group to lock dates, build a shared itinerary, and split expenses — one link, no downloads, no sign-ups.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <PhoneCaptureHero />
                </div>

                {/* Metric strip + press row — social proof in first viewport */}
                <div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-2 mb-5"
                  aria-label="TRYPS usage metrics"
                >
                  {[
                    { n: "500+", label: "groups planning" },
                    { n: "12k+", label: "messages routed" },
                    { n: "NYC",  label: "built in" },
                  ].map((m, i) => (
                    <div key={m.label} className="flex items-center gap-2">
                      {i > 0 && (
                        <span className="w-1 h-1 rounded-full" style={{ background: "#A09588" }} aria-hidden="true" />
                      )}
                      <span className="text-sm font-black tabular-nums" style={{ color: "#111827" }}>{m.n}</span>
                      <span className="text-xs" style={{ color: "#7A6E63" }}>{m.label}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2"
                  aria-label="As seen on"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#A09588", letterSpacing: "0.22em" }}>
                    As seen on
                  </span>
                  {[
                    { label: "Product Hunt" },
                    { label: "Reddit r/travel" },
                    { label: "Indie Hackers" },
                    { label: "X / Twitter" },
                  ].map(p => (
                    <span
                      key={p.label}
                      className="text-xs font-black uppercase tracking-wider"
                      style={{ color: "#A09588", letterSpacing: "0.14em", filter: "grayscale(1)", opacity: 0.75 }}
                    >
                      {p.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — scrapbook collage */}
              <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
                <HeroCollage />
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST MARQUEE ── */}
        <TrustMarquee />

        {/* ── PROBLEM VS SOLUTION ── */}
        <section
          aria-labelledby="problem-solution-title"
          className="py-16 md:py-28"
          style={{ background: "#FFFFFF", borderTop: "1px solid rgba(224,214,200,0.4)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <SectionEyebrow n="01" label="The coordination tax" />
              <h2
                id="problem-solution-title"
                className="font-black tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#111827" }}
              >
                Why do most group trips fail before they start?
              </h2>
              <p className="mt-4 text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#7A6E63" }}>
                According to{" "}
                <a
                  href="https://www.ustravel.org/research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: "#D9071C" }}
                >
                  U.S. Travel Association research
                </a>
                , group travel is among the most planned and most often postponed category of leisure trips — coordination, not desire, is what stops them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Without TRYPS — sticky note stack */}
              <article
                className="relative rounded-[2.5rem] p-7 md:p-10 overflow-hidden"
                style={{ background: "#F5F7FA", border: "1.5px solid #E0D6C8" }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <XCircle className="h-7 w-7 shrink-0" style={{ color: "#A09588" }} />
                  <h3 className="text-xl font-black" style={{ color: "#A09588" }}>Without TRYPS</h3>
                </div>

                <ul className="flex flex-col gap-3 list-none p-0">
                  {[
                    { text: "Endless group chat messages, no decisions", tilt: "-2deg", tone: "cream" as const },
                    { text: "Dates that never get locked",               tilt: "1deg",  tone: "cream" as const },
                    { text: "Plans scattered across notes & chats",      tilt: "-1.5deg", tone: "cream" as const },
                    { text: "One person stuck organising everything",    tilt: "2deg",  tone: "cream" as const },
                    { text: "Awkward money follow-ups after the trip",   tilt: "-1deg", tone: "cream" as const },
                  ].map(item => (
                    <li key={item.text} className="self-start">
                      <div
                        className="relative px-5 py-3.5 text-sm font-semibold max-w-md"
                        style={{
                          background: "#FFFDF8",
                          color: "#7A6E63",
                          transform: `rotate(${item.tilt})`,
                          boxShadow: "0 6px 18px rgba(61,53,48,0.08)",
                          border: "1px solid #E0D6C8",
                          borderRadius: 3,
                          filter: "grayscale(0.2)",
                        }}
                      >
                        <span
                          className="absolute -top-1.5 left-4 w-10 h-3"
                          style={{ background: "rgba(160,149,136,0.35)", borderLeft: "1px dashed rgba(160,149,136,0.5)", borderRight: "1px dashed rgba(160,149,136,0.5)" }}
                          aria-hidden="true"
                        />
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              {/* With TRYPS — red gradient card with plane trail + peeking polaroid */}
              <article
                className="relative rounded-[2.5rem] p-7 md:p-10 text-white md:-translate-y-5 shadow-2xl overflow-hidden"
                style={{ background: "linear-gradient(145deg, #D9071C 0%, #B00618 100%)" }}
              >
                <div className="absolute -top-6 -left-4 hidden md:block pointer-events-none z-10" aria-hidden="true">
                  <Polaroid
                    tilt="-10deg"
                    width={110}
                    height={120}
                    caption="Positano ✔"
                    photoBg="linear-gradient(160deg, #4A90D9 0%, #34D399 100%)"
                  >
                    <Camera className="h-10 w-10 text-white/80" />
                  </Polaroid>
                </div>

                {/* Brand brushstrokes — hand-drawn trip route with waypoints */}
                <div
                  className="absolute bottom-2 right-2 md:bottom-4 md:right-6 pointer-events-none"
                  aria-hidden="true"
                >
                  <BrandMark variant="13" width={220} tilt="-6deg" tone="white" opacity={0.35} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-7">
                    <CheckCircle2 className="h-7 w-7 text-white shrink-0" />
                    <h3 className="text-xl font-black text-white">With TRYPS</h3>
                  </div>
                  <ul className="space-y-4 list-none p-0">
                    {[
                      "One shared plan from idea to execution",
                      "Dates locked in minutes, not weeks",
                      "Everyone aligned and contributing",
                      "Clear itinerary the whole group follows",
                      "Expenses handled in one place",
                    ].map(t => (
                      <li key={t} className="flex items-start gap-3 text-white">
                        <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
                        <span className="font-medium leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section
          id="features"
          aria-labelledby="features-title"
          className="py-16 md:py-28"
          style={{ background: "#FFFFFF", borderTop: "1px solid rgba(224,214,200,0.4)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-18">
              <SectionEyebrow n="02" label="Everything you need" />
              <h2
                id="features-title"
                className="font-black tracking-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#111827" }}
              >
                Everything your group needs — without the chaos
              </h2>
            </div>

            <div className="mb-8">
              {/* Featured card with embedded iMessage preview */}
              <div
                className="relative rounded-4xl p-8 md:p-10 mb-6 flex flex-col md:flex-row gap-7 items-start md:items-center transition-all duration-300 hover:shadow-xl overflow-hidden"
                style={{ background: "#F5F7FA", border: "1.5px solid #E0D6C8" }}
              >
                <div className="flex-1 flex flex-col md:flex-row gap-7 items-start md:items-center">
                  <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg"
                    style={{ background: "linear-gradient(135deg, #D9071C, #E85050)" }}
                  >
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest mb-2 block tabular-nums" style={{ color: "#D9071C", letterSpacing: "0.22em" }}>01</span>
                    <h3 className="text-2xl font-black mb-2" style={{ color: "#111827" }}>Get everyone in instantly</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#7A6E63" }}>
                      Send one link. No apps, no accounts, no "wait, what are we using?" — your whole group is in and contributing in seconds.
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex flex-col gap-2 shrink-0 min-w-[220px]" aria-hidden="true">
                  <IMessageBubble side="in" tilt="-1deg">Join the Amalfi trip →</IMessageBubble>
                  <IMessageBubble side="out" tilt="1deg" className="self-end">omw, tell Sam and Priya</IMessageBubble>
                </div>
              </div>

              {/* Grid of remaining 4 */}
              <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0">
                {[
                  { n: "02", title: "Lock dates in one round",          desc: "One poll. Everyone responds. Dates decided — no endless back-and-forth.", color: "#4A90D9", icon: Calendar,   accent: "calendar" as const },
                  { n: "03", title: "Keep the plan in one place",       desc: "A shared itinerary everyone can see and update — no confusion, no scattered notes.", color: "#34D399", icon: MapPin,     accent: "polaroid" as const },
                  { n: "04", title: "No awkward money conversations",   desc: "Track who paid what and who owes whom — settle up cleanly at the end.",             color: "#8B5CF6", icon: Wallet,     accent: "pass"     as const },
                  { n: "05", title: "Know what everyone wants",         desc: "Capture preferences early so you don't plan a trip half the group isn't excited about.", color: "#EC4899", icon: Globe, accent: "sticky" as const },
                ].map(f => (
                  <li
                    key={f.title}
                    className="relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg overflow-hidden"
                    style={{ background: "#FFFFFF", border: "1.5px solid #E0D6C8" }}
                  >
                    <div className="absolute top-3 right-3 opacity-80" aria-hidden="true">
                      {f.accent === "calendar" && <CalendarPage month="JUN" day="14" tilt="12deg" size={52} />}
                      {f.accent === "polaroid" && (
                        <div className="inline-block p-1.5 pb-3 shadow-md" style={{ background: "#FFFDF8", borderRadius: 3, transform: "rotate(8deg)" }}>
                          <div className="w-12 h-12 rounded-sm" style={{ background: "linear-gradient(135deg, #34D399 0%, #4A90D9 100%)" }} />
                        </div>
                      )}
                      {f.accent === "pass" && (
                        <span className="inline-block px-2 py-1 rounded-md text-[9px] font-black tabular-nums text-white shadow-md" style={{ background: "#8B5CF6", transform: "rotate(8deg)", letterSpacing: "0.12em" }}>$1,680</span>
                      )}
                      {f.accent === "sticky" && (
                        <span
                          className="inline-block px-2 py-1.5 text-[10px] font-bold shadow-md"
                          style={{ background: "#FFE875", color: "#111827", transform: "rotate(10deg)" }}
                        >
                          vibe: chill
                        </span>
                      )}
                    </div>

                    <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4 shadow-sm" style={{ background: `${f.color}18` }}>
                      <f.icon className="h-5 w-5" style={{ color: f.color }} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest mb-2 block tabular-nums" style={{ color: f.color, letterSpacing: "0.22em" }}>{f.n}</span>
                    <h3 className="text-base font-black mb-2" style={{ color: "#111827" }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#7A6E63" }}>{f.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center rounded-4xl p-7 md:p-10" style={{ background: "#F5F7FA", border: "1.5px solid #E0D6C8" }}>
              <p className="text-xl font-black mb-4" style={{ color: "#111827" }}>Start your group trip</p>
              <TrypsSmsCTA
                className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg transition-all hover:scale-105"
                style={{ background: "#D9071C", boxShadow: "0 6px 24px rgba(217,7,28,0.28)" }}
                ariaLabel="Text Hey Tryps to start planning your group trip"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Text Hey Tryps
                <ArrowRight className="h-5 w-5" />
              </TrypsSmsCTA>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          id="how-it-works"
          aria-labelledby="how-title"
          className="py-16 md:py-28 relative overflow-hidden"
          style={{ background: "#F5F7FA", borderTop: "1px solid rgba(224,214,200,0.4)" }}
        >
          {/* Brand brushstrokes — kinetic accent in the header area */}
          <div className="absolute top-8 right-6 md:right-16 pointer-events-none hidden md:block">
            <BrandMark variant="11" width={140} tilt="12deg" opacity={0.35} />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-18">
              <SectionEyebrow n="03" label="How it works" />
              <h2
                id="how-title"
                className="font-black tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#111827" }}
              >
                From "we should plan something" to booked and ready
              </h2>
            </div>

            <div className="relative">
              {/* Dashed flight path */}
              <svg
                className="hidden lg:block absolute left-[6%] right-[6%] pointer-events-none"
                style={{ top: 42, width: "88%", height: 40 }}
                viewBox="0 0 1000 40"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 20 Q 250 -10 500 20 T 990 20"
                  stroke="#D9071C"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  strokeOpacity="0.4"
                  fill="none"
                />
              </svg>

              <ol className="grid lg:grid-cols-4 gap-6 list-none p-0 relative">
                {[
                  { n: "1", title: "Create and invite",     desc: "Start a trip in seconds. Share a link or iMessage so everyone joins instantly." },
                  { n: "2", title: "Lock dates fast",       desc: "Run one availability poll so your group can pick dates without endless back-and-forth." },
                  { n: "3", title: "Plan together",         desc: "Add places, stays, activities, and notes to one shared itinerary everyone can update." },
                  { n: "4", title: "Split expenses simply", desc: "Track shared costs during the trip so everyone can see balances and settle up cleanly." },
                ].map((item, idx) => (
                  <li
                    key={item.n}
                    className="relative rounded-4xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-lg group"
                    style={{ background: "#FFFFFF", border: "1.5px solid #E0D6C8" }}
                  >
                    <div
                      className="relative rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-5 border-4 border-white shadow-md transition-transform group-hover:scale-110 tabular-nums"
                      style={{
                        background: idx === 0 ? "#D9071C" : "rgba(217,7,28,0.10)",
                        color: idx === 0 ? "#FFFFFF" : "#D9071C",
                        width: 60,
                        height: 60,
                      }}
                      aria-hidden="true"
                    >
                      {idx === 0 ? <Plane className="h-6 w-6" /> : item.n}
                    </div>
                    <h3 className="text-lg font-black mb-3" style={{ color: "#111827" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#7A6E63" }}>{item.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section
          aria-labelledby="social-proof-title"
          className="py-16 md:py-28"
          style={{ background: "#FFFFFF", borderTop: "1px solid rgba(224,214,200,0.4)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <SectionEyebrow n="04" label="Real trips" />
              <h2
                id="social-proof-title"
                className="font-black tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#111827" }}
              >
                Used by groups planning trips that actually happen
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12 px-2 md:px-6">
              {[
                { quote: "We went from months of vague group-chat messages to a booked trip in less than a week. The date poll alone saved us hours.",      author: "Aarav M.", detail: "organised a 7-person Barcelona trip",     avatarColor: "#D9071C", tilt: "-2deg", photoBg: "linear-gradient(160deg, #F59E0B 0%, #E85050 100%)", icon: Sparkles },
                { quote: "Usually one person ends up managing everything. This time the plan felt shared, and the money part did not become awkward.",       author: "Riya S.",  detail: "organised a bachelorette weekend in Jaipur", avatarColor: "#4A90D9", tilt: "1deg",  photoBg: "linear-gradient(160deg, #EC4899 0%, #8B5CF6 100%)", icon: Heart },
                { quote: "The biggest win was that nobody had to install anything just to respond. That removed the usual friction immediately.",             author: "Kabir T.", detail: "organised a 5-person road trip",            avatarColor: "#34D399", tilt: "-1deg", photoBg: "linear-gradient(160deg, #2D6B4F 0%, #4A90D9 100%)", icon: MapIcon },
              ].map((t, i) => {
                const Icon = t.icon;
                return (
                  <figure
                    key={i}
                    className="group relative p-4 pb-6 transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      background: "#FFFDF8",
                      borderRadius: 6,
                      transform: `rotate(${t.tilt})`,
                      boxShadow: "0 20px 40px rgba(61,53,48,0.14), 0 2px 6px rgba(61,53,48,0.08)",
                    }}
                  >
                    <div
                      className="relative aspect-4/3 overflow-hidden mb-5 flex items-center justify-center"
                      style={{ background: t.photoBg, borderRadius: 2 }}
                      aria-hidden="true"
                    >
                      <Icon className="h-12 w-12 text-white/80" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-black uppercase tracking-widest text-white/90 tabular-nums">
                        {["JUN 2024", "SEP 2024", "NOV 2024"][i]}
                      </span>
                    </div>

                    <blockquote
                      className="text-base leading-relaxed mb-5 px-1"
                      style={{ color: "#111827", fontStyle: "italic", fontWeight: 500 }}
                    >
                      "{t.quote}"
                    </blockquote>

                    <figcaption className="flex items-center gap-3 px-1">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-black shrink-0" style={{ background: t.avatarColor }}>
                        {t.author[0]}
                      </div>
                      <div>
                        <strong className="block text-sm font-black" style={{ color: "#D9071C" }}>{t.author}</strong>
                        <span className="text-xs" style={{ color: "#A09588" }}>{t.detail}</span>
                      </div>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── RECIPES (NEW) ── */}
        <RecipesSection />

        {/* ── PRODUCT PREVIEW — dark section ── */}
        <section
          aria-labelledby="preview-title"
          className="py-16 md:py-28"
          style={{ background: "#111827", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <SectionEyebrow n="06" label="See it in action" color="#E85050" />
              <h2
                id="preview-title"
                className="font-black tracking-tight mb-4 text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                What planning actually looks like
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#AEAEB2" }}>
                Instead of planning across chat, notes, and payment apps, your group gets one shared flow: invite, poll, plan, and split.
              </p>
            </div>

            <figure className="rounded-3xl p-5 md:p-8" style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)" }}>
              <ProductPreview />
              <figcaption className="text-center text-sm mt-6 font-medium" style={{ color: "#AEAEB2" }}>
                One shared flow for invites, date voting, itinerary planning, and expense splitting.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── INTEGRATIONS (NEW) ── */}
        <IntegrationsSection />

        {/* ── FAQ ── */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="py-16 md:py-28"
          style={{ background: "#F5F7FA", borderTop: "1px solid rgba(224,214,200,0.4)" }}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <SectionEyebrow n="08" label="FAQ" />
              <h2
                id="faq-title"
                className="font-black tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", letterSpacing: "-0.02em", color: "#111827" }}
              >
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { q: "What is TRYPS?", a: "TRYPS is a group trip planning app for friends that helps you coordinate dates, build a shared itinerary, and split expenses — all in one place." },
                { q: "How is this different from WhatsApp or Google Sheets?", a: "WhatsApp is good for chatting and Google Sheets is flexible for manual planning, but neither is built for making group travel decisions. TRYPS gives your group one structured place to vote on dates, plan the itinerary, and track shared costs so decisions happen faster and fewer details get lost." },
                { q: "Does everyone need to download an app?", a: "No. People can join instantly via link or iMessage without installing anything." },
                { q: "Can everyone edit the plan?", a: "Yes. Everyone can respond to polls, contribute to the itinerary, and log expenses." },
                { q: "How does expense splitting work?", a: "Log shared costs as they happen and TRYPS tracks balances so everyone can see what they owe at the end of the trip." },
                { q: "How do I join the TRYPS waitlist?", a: "Enter your mobile number on the TRYPS homepage and tap Join. Your Messages app (iMessage on iPhone, Messages on Mac) opens a new chat to our Tryps AI planner at +1 (917) 745-3624 with “Hey Tryps” ready to send. Hit send and Tryps replies straight back — no app download or email sign-up required." },
                { q: "How do I start?", a: "Create a trip, share the link with your group, and start planning together." },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl overflow-hidden transition-colors"
                  style={{ background: "#FFFDF8", border: "1.5px solid #E0D6C8" }}
                >
                  <summary
                    className="flex justify-between items-center py-5 px-6 cursor-pointer list-none select-none gap-4"
                    style={{ color: "#111827" }}
                  >
                    <h3 className="font-black text-lg m-0 flex-1" style={{ color: "#111827" }}>{faq.q}</h3>
                    <span
                      className="shrink-0 w-8 h-8 rounded-full inline-flex items-center justify-center transition-transform duration-200 ease-out group-open:rotate-180"
                      style={{ background: "rgba(217,7,28,0.10)" }}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={3} style={{ color: "#D9071C" }} />
                    </span>
                  </summary>
                  <div className="pb-5 px-6">
                    <p className="leading-relaxed" style={{ color: "#7A6E63" }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          aria-labelledby="final-cta-title"
          className="relative overflow-hidden"
          style={{ background: "#D9071C", borderTop: "1px solid #B00618" }}
        >
          {/* Background orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "rgba(176,6,24,0.5)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl" style={{ background: "rgba(255,255,255,0.03)" }} />
          </div>

          {/* Tape + faded scrapbook props */}
          <TapeStrip tilt="-3deg" className="top-8 left-1/2 -translate-x-1/2" width={140} style={{ background: "rgba(255,255,255,0.22)" }} />

          {/* Brand brushstrokes — dynamic motion in corners */}
          <div className="absolute top-16 right-8 md:right-24 z-0 pointer-events-none hidden md:block">
            <BrandMark variant="12" width={200} tilt="15deg" tone="white" opacity={0.18} />
          </div>
          <div className="absolute bottom-10 right-8 md:right-40 z-0 pointer-events-none">
            <BrandMark variant="11" width={180} tilt="-8deg" tone="white" opacity={0.14} />
          </div>

          <div className="absolute top-24 left-6 md:left-20 z-10 opacity-70 hidden md:block" aria-hidden="true">
            <IMessageBubble side="in" tilt="-5deg" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
              when are we going?
            </IMessageBubble>
          </div>
          <div className="absolute top-48 right-6 md:right-24 z-10 opacity-80 hidden md:block" aria-hidden="true">
            <IMessageBubble side="out" tilt="4deg" style={{ background: "rgba(255,255,255,0.22)", color: "#FFFFFF" }}>
              let's pick a date
            </IMessageBubble>
          </div>
          <div className="absolute bottom-20 left-8 md:left-32 z-10 opacity-80 hidden md:block" aria-hidden="true">
            <IMessageBubble side="in" tilt="-3deg" style={{ background: "rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.95)" }}>
              ok i'll make a poll
            </IMessageBubble>
          </div>

          <div className="absolute -bottom-4 left-4 md:left-12 z-10 opacity-95 hidden lg:block" aria-hidden="true">
            <Polaroid tilt="-8deg" width={140} height={150} caption="next summer" photoBg="linear-gradient(160deg, #FFFDF8 0%, #FFE875 100%)">
              <Palmtree className="h-12 w-12" style={{ color: "#D9071C" }} />
            </Polaroid>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-24 md:py-40 text-center relative z-20">
            <h2
              id="final-cta-title"
              className="font-black text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 1.0, letterSpacing: "-0.04em" }}
            >
              The trip has been in the group chat
            </h2>
            <p
              className="font-black text-white mb-10"
              style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 1.0, letterSpacing: "-0.04em", opacity: 0.45 }}
            >
              long enough.
            </p>
            <p className="text-xl mb-12 font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
              Create a trip. Share the link. Get everyone aligned in minutes.
            </p>
            <TrypsSmsCTA
              className="inline-flex items-center gap-3 font-black text-xl px-14 py-6 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
              style={{ background: "#FFFFFF", color: "#D9071C", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}
              ariaLabel="Text Hey Tryps to start planning with friends"
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
              Text Hey Tryps
              <ArrowRight className="h-6 w-6" />
            </TrypsSmsCTA>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#111827", color: "#F5F5F5", borderTop: "3px solid #D9071C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand + built-in */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <TrypsLogo height={28} />
                <span className="sr-only">TRYPS</span>
                <Plane className="h-4 w-4" style={{ color: "#D9071C", transform: "rotate(-30deg)" }} aria-hidden="true" />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Built in NYC by people who got tired of trips stuck in the group chat.
              </p>
              <a href="/about" className="inline-block mt-3 text-sm font-semibold hover:underline" style={{ color: "#D9071C" }}>
                About the team →
              </a>
            </div>

            {/* Product */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}>
                Product
              </p>
              <ul className="flex flex-col gap-2.5 list-none p-0 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#recipes" className="hover:text-white transition-colors">Recipes</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Guides */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}>
                Planning guides
              </p>
              <ul className="flex flex-col gap-2.5 list-none p-0 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <li><a href="/group-trip-planning-guide" className="hover:text-white transition-colors">Group trip planning guide</a></li>
                <li><a href="/split-trip-expenses" className="hover:text-white transition-colors">Split trip expenses fairly</a></li>
                <li><a href="/weekend-trip-planning-checklist" className="hover:text-white transition-colors">Weekend trip checklist</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}>
                Company
              </p>
              <ul className="flex flex-col gap-2.5 list-none p-0 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.35)" }}>
              TRYPS helps friends plan trips together, lock dates, build itineraries, and split expenses.
            </p>
            <div className="flex flex-col items-start md:items-end gap-1">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                Support: <a href="mailto:support@trypsagent.com" className="hover:underline" style={{ color: "#D9071C" }}>support@trypsagent.com</a>
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>&copy; TRYPS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
