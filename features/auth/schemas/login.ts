import { z } from "zod";

import { authSchema } from "./base";

export const authLoginSchema = authSchema.pick({
  email: true,
  password: true,
});

export type AuthLogin = z.infer<typeof authLoginSchema>;
