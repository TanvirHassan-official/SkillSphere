export const runtime = "nodejs";

import { toNextJsHandler } from "better-auth/next-js";
import { getAuth } from "@/lib/auth";

const handler = (req) => toNextJsHandler(getAuth())(req);

export const GET = handler;
export const POST = handler;