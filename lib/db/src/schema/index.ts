import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const waitlistPhonesTable = pgTable("waitlist_phones", {
  id: serial("id").primaryKey(),
  countryCode: varchar("country_code", { length: 10 }).notNull().default("+1"),
  phoneNumber: varchar("phone_number", { length: 30 }).notNull(),
  fullNumber: varchar("full_number", { length: 40 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertWaitlistPhoneSchema = createInsertSchema(waitlistPhonesTable).omit({ id: true, createdAt: true });
export type InsertWaitlistPhone = z.infer<typeof insertWaitlistPhoneSchema>;
export type WaitlistPhone = typeof waitlistPhonesTable.$inferSelect;
