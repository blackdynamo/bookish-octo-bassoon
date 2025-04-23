import { z } from "zod";

export const appearanceSchema = z.enum(["dark", "light"]);
export type Appearance = z.infer<typeof appearanceSchema>;
export const DEFAULT_APPEARANCE = "dark";

export const preferencesSchema = z
  .object({
    appearance: z
      .unknown()
      .transform((v) =>
        ["null", "undefined", null].includes(v as string) ? undefined : v,
      )
      .pipe(appearanceSchema.default(DEFAULT_APPEARANCE)),
  })
  .readonly();

export type Preferences = z.infer<typeof preferencesSchema>;
