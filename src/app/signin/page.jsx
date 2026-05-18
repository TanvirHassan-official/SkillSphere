"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import GoogleLogin from "@/Components/GoogleLogin";
import { toast } from "react-toastify";

export default function SignInPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        setLoading(true);
        setErrorMsg("");

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            setErrorMsg(error.message || "Try again");
            toast.error("Something went wrong");
            return;
        }
        toast.success("Signin successfully.");
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-[#d7eeff] flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2 text-2xl">
                        <FontAwesomeIcon
                            icon={faStackOverflow}
                            className="text-[#59A5D8] text-4xl"
                        />
                        <span className="text-[#133C55] font-extrabold">Skill</span>
                        <span className="text-[#386FA4] font-semibold -ml-2">Sphere</span>
                    </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg px-8 py-10">

                    <h1 className="text-2xl font-bold text-[#133C55] mb-1">Welcome back</h1>
                    <p className="text-sm text-gray-500 mb-8">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-[#386FA4] hover:underline font-medium">
                            Sign up
                        </Link>
                    </p>

                    <form onSubmit={onSubmit} className="flex flex-col gap-5">

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#133C55]">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                className="input input-bordered w-full focus:outline-none focus:border-[#59A5D8]"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#133C55]">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full focus:outline-none focus:border-[#59A5D8]"
                                required
                            />
                        </div>

                        {/* Error */}
                        {errorMsg && (
                            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                                {errorMsg}
                            </div>
                        )}

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn w-full bg-linear-to-r from-[#133C55] to-[#386FA4] hover:opacity-90 text-white border-none rounded-xl mt-2"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm" />
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>
                
                <div className="mt-4 grid gap-2">
                    <p className="text-center">or</p>
                    <GoogleLogin></GoogleLogin>
                </div>
                    
                </div>

                {/* Footer note */}
                <p className="text-center text-xs text-gray-500 mt-6">
                    By signing in, you agree to our{" "}
                    <Link href="/terms" className="underline hover:text-[#386FA4]">Terms</Link>
                    {" & "}
                    <Link href="/privacy" className="underline hover:text-[#386FA4]">Privacy Policy</Link>
                </p>
            </div>
        </div>
    );
}
