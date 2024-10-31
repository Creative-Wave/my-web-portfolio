import { z } from "zod";

export const fromSchema = z.object({
  YourName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  YourEmail: z.string().email({ message: "Invalid email address" }),
  Message: z.string().min(1, { message: "Message is required" }),
});
