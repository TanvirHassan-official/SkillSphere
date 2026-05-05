"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";

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

        setLoading(false);

        console.log({ data, error });

        if (error) {
            setErrorMsg(error.message || "Something went wrong");
            return;
        }

        router.push("/");
    };

    return (
        <div className="card border mx-auto w-125 py-10 mt-5 bg-base-100 shadow m-20">
            <h1 className="text-center text-2xl font-bold">Sign Up</h1>

            <form
                className="flex w-96 mx-auto flex-col gap-4 mt-5"
                onSubmit={onSubmit}
            >
                {/* Name */}
                <div className="form-control flex gap-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Image */}
                <div className="form-control flex gap-4">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        name="image"
                        type="text"
                        placeholder="Image URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Email */}
                <div className="form-control flex gap-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="input input-bordered"
                        required
                        pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
                    />

                </div>
                <span className="text-sm text-gray-500">
                    Please enter a valid email address
                </span>

                {/* Password */}
                <div className="form-control flex gap-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered"
                        required
                        minLength={8}
                    />

                </div>
                <span className="text-sm text-gray-500 ">
                    Must be at least 8 characters with 1 uppercase and 1 number
                </span>

                {/* Error */}
                {errorMsg && (
                    <p className="text-red-500 text-sm text-center">
                        {errorMsg}
                    </p>
                )}

                {/* Buttons */}
                <div className="flex gap-2 ">
                    <button
                        type="submit"
                        className={`btn btn-primary ${loading ? "loading" : ""}`}
                        disabled={loading}
                    >
                        {!loading && <Check />}
                        Submit
                    </button>

                    <button
                        type="reset"
                        className="btn btn-secondary"
                        disabled={loading}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}