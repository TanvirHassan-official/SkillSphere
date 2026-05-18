import {NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { toast } from "react-toastify";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        toast.info("You need to login first!")
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/all-courses/:path"], // Specify the routes the middleware applies to
};