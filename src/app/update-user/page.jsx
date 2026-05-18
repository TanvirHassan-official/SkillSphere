/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser, faImage, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export default function UpdateUserPage() {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [preview, setPreview] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const image = e.target.image.value.trim();

    setLoading(true);
    setErrorMsg("");
    setSuccess(false);

    const { error } = await authClient.updateUser({ name, image });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message || "Something went wrong.");
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push("/profile"), 1500);
  };

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#d7eeff] flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-lg">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-2xl">
            <FontAwesomeIcon icon={faStackOverflow} className="text-[#59A5D8] text-4xl" />
            <span className="text-[#133C55] font-extrabold">Skill</span>
            <span className="text-[#386FA4] font-semibold -ml-2">Sphere</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-md px-8 py-10 space-y-8">

          {/* Header */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 rounded-full bg-[#3F88C5]" />
              <span className="text-xs font-bold tracking-widest text-[#3F88C5] uppercase">
                Account Settings
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#133C55]">Update Profile</h1>
            <p className="text-sm text-gray-500">Change your display name or profile picture.</p>
          </div>

          {/* Current avatar preview */}
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-[#386FA4] ring-offset-2 ring-offset-white">
                {(preview || user?.image) ? (
                  <img
                    src={preview || user?.image}
                    alt="avatar preview"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : (
                  <div className="bg-[#386FA4] text-white flex items-center justify-center w-full h-full text-xl font-bold rounded-full">
                    {initials}
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#133C55]">{user?.name}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
          </div>

          <div className="h-px w-full bg-gray-100" />

          {/* Form */}
          <form onSubmit={onSubmit} className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#133C55]">
                Display Name
              </label>
              <label className="input input-bordered flex items-center gap-3 focus-within:border-[#59A5D8]">
                <FontAwesomeIcon icon={faUser} className="text-gray-400" width={14} />
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.name}
                  placeholder="Your full name"
                  className="grow"
                  required
                />
              </label>
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#133C55]">
                Profile Image URL
              </label>
              <label className="input input-bordered flex items-center gap-3 focus-within:border-[#59A5D8]">
                <FontAwesomeIcon icon={faImage} className="text-gray-400" width={14} />
                <input
                  name="image"
                  type="url"
                  defaultValue={user?.image}
                  placeholder="https://example.com/avatar.jpg"
                  className="grow"
                  onChange={(e) => setPreview(e.target.value)}
                />
              </label>
              <p className="text-xs text-gray-400 mt-0.5">Paste a direct link to your image.</p>
            </div>

            {/* Error */}
            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                {errorMsg}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} width={14} />
                Profile updated! Redirecting…
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading || success}
                className="btn flex-1 bg-[#133C55] hover:bg-[#386FA4] text-white border-none rounded-xl transition-all duration-300 hover:scale-105"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCheck} width={13} />
                    Save Changes
                  </>
                )}
              </button>

              <Link href="/profile">
                <button
                  type="button"
                  className="btn border border-[#3F88C5] text-[#133C55] hover:bg-[#386FA4] hover:text-white hover:border-none rounded-xl gap-2 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faArrowLeft} width={12} />
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
