import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

let authInstance;

export function getAuth() {
  if (authInstance) return authInstance;

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI");
  }

  const client = new MongoClient(uri);
  const db = client.db("skillsphere");

  authInstance = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
      enabled: true,
    },
  });

  return authInstance;
}