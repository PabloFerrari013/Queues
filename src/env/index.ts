import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),

  MAILTRAP_HOST: z.string(),
  MAILTRAP_PORT: z.coerce.number(),
  MAILTRAP_USER: z.string(),
  MAILTRAP_PASS: z.string(),

  REDIS_PORT: z.coerce.number(),
  REDIS_HOST: z.string(),
});

const envSchemaResponse = envSchema.safeParse(process.env);

if (!envSchemaResponse.success) {
  console.log(envSchemaResponse.error);
  throw new Error();
}

export const env = envSchemaResponse.data;
