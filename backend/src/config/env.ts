import jwt from "jsonwebtoken";

export const env = {
  JWT_SECRET: process.env.JWT_SECRET || "super-secret",
  JWT_EXPIRES_IN: (process.env.JWT_EXPIRES_IN ||
    "1d") as jwt.SignOptions["expiresIn"],
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS || "12", 10),
} as const;
