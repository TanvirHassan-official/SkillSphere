"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import GoogleLogin from "@/Components/GoogleLogin";

export default function SignUpPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const image = formData.get("image");
        const email = formData.get("email");
        const password = formData.get("password");

        setLoading(true);
        setErrorMsg("");

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });
        console.log(data);

        setLoading(false);

        if (error) {
            setErrorMsg(error.message || "Something went wrong");
            return;
        }

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

                    <h1 className="text-2xl font-bold text-[#133C55] mb-1">Create your account</h1>
                    <p className="text-sm text-gray-500 mb-8">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-[#386FA4] hover:underline font-medium">
                            Sign in
                        </Link>
                    </p>

                    <form onSubmit={onSubmit} className="flex flex-col gap-5">

                        {/* Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#133C55]">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                className="input input-bordered w-full focus:outline-none focus:border-[#59A5D8]"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#133C55]">Profile Image URL</label>
                            <input
                                name="image"
                                type="text"
                                placeholder="https://example.com/avatar.jpg"
                                className="input input-bordered w-full focus:outline-none focus:border-[#59A5D8]"
                                required
                            />
                        </div>

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
                                placeholder="Min. 8 characters"
                                className="input input-bordered w-full focus:outline-none focus:border-[#59A5D8]"
                                required
                                minLength={8}
                            />
                            <p className="text-xs text-gray-400 mt-1">
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </p>
                        </div>

                        {/* Error */}
                        {errorMsg && (
                            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                                {errorMsg}
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="flex gap-3 mt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn flex-1 bg-linear-to-r from-[#133C55] to-[#386FA4] hover:opacity-90 text-white border-none rounded-xl"
                            >
                                {loading ? (
                                    <span className="loading loading-spinner loading-sm" />
                                ) : (
                                    <>
                                        <Check />
                                        Create Account
                                    </>
                                )}
                            </button>

                            <button
                                type="reset"
                                disabled={loading}
                                className="btn border border-[#59A5D8] text-[#386FA4] hover:bg-[#386FA4] hover:text-white hover:border-none rounded-xl"
                            >
                                Reset
                            </button>
                        </div>
                    </form>

                    <GoogleLogin></GoogleLogin>
                </div>

                {/* Footer note */}
                <p className="text-center text-xs text-gray-500 mt-6">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" className="underline hover:text-[#386FA4]">Terms</Link>
                    {" & "}
                    <Link href="/privacy" className="underline hover:text-[#386FA4]">Privacy Policy</Link>
                </p>
            </div>
        </div>
    );
}
