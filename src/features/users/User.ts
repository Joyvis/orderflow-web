import { z } from "zod";

// Define a Zod schema for the User, at least for the "name" field as requested
export const userSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }).max(50, { message: 'Name must be less than 50 characters' }),
});

// Optionally, you can still export the TypeScript type inferred from the schema:
export type User = z.infer<typeof userSchema>;
