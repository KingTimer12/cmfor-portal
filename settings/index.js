import { z } from "zod";

const envSchema = z.object({
  APP_NAME: z.string().min(1, "APP_NAME is required"),
	API_URL: z.string().url(),
  API_WORDPRESS_URL: z.string().url(),
});

const env = envSchema.parse({
	API_URL: process.env.EXPO_PUBLIC_API_URL,
  APP_NAME: process.env.EXPO_PUBLIC_APP_NAME,
  API_WORDPRESS_URL: process.env.EXPO_PUBLIC_API_WORDPRESS_URL,
});

export const settings = {
	...env,
};
