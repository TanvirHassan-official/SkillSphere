/* eslint-disable @next/next/no-img-element */
"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faShieldHalved,
  faBookOpen,
  faStar,
  faClock,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const stats = [
  { icon: faBookOpen, value: "0", label: "Enrolled" },
  { icon: faStar, value: "0", label: "Completed" },
  { icon: faClock, value: "0h", label: "Hours" },
];

export default function ProfilePage() {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const loading = userData.isPending;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-[#386FA4]" />
      </div>
    );
  }

  if (!user) {
    redirect("/signin");
  }

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const provider = userData.data?.session?.provider;

  return (
    <div className="min-h-screen bg-[#d7eeff] px-5 md:px-20 lg:px-40 py-14">

      {/* Page Header */}
      <div className="mb-10 space-y-1">
        <div className="flex items-center gap-2">
          <div className="h-px w-8 rounded-full bg-[#3F88C5]" />
          <span className="text-xs font-bold tracking-widest text-[#3F88C5] uppercase">
            My Account
          </span>
        </div>
        <h1 className="text-4xl font-bold text-[#133C55]">Profile</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/*Left Column: Identity Card*/}
        <div className="lg:col-span-1 flex flex-col gap-6">

          
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center gap-4">

            
            <div className="relative">
              <div className="avatar">
                <div className="w-28 rounded-full ring ring-[#386FA4] ring-offset-2 ring-offset-white">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="bg-[#386FA4] text-white flex items-center justify-center w-full h-full text-3xl font-bold rounded-full">
                      {initials}
                    </div>
                  )}
                </div>
              </div>

              
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
            </div>

            {/* Name & Email */}
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold text-[#133C55]">{user?.name}</h2>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>

            {/* Provider badge */}
            {provider === "google" && (
              <div className="badge badge-outline gap-1 text-xs text-gray-500 border-gray-200">
                <FontAwesomeIcon icon={faGoogle} width={11} />
                Google account
              </div>
            )}

            {/* Edit button */}
            <Link href="/update-user" className="w-full">
              <button className="btn w-full bg-[#133C55] hover:bg-[#386FA4] text-white rounded-xl border-none gap-2 transition-all duration-300 hover:scale-105">
                <FontAwesomeIcon icon={faPen} width={13} />
                Edit Profile
              </button>
            </Link>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="text-sm font-bold text-[#133C55] mb-4 uppercase tracking-widest">
              My Stats
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {stats.map(({ icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 bg-[#d7eeff] rounded-2xl py-4"
                >
                  <FontAwesomeIcon icon={icon} className="text-[#386FA4]" width={18} />
                  <span className="text-xl font-bold text-[#133C55]">{value}</span>
                  <span className="text-xs text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*Right Column: Info Panels */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Account Info */}
          <div className="bg-white rounded-3xl shadow-md p-8 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 rounded-full bg-[#3F88C5]" />
              <h3 className="text-xs font-bold tracking-widest text-[#3F88C5] uppercase">
                Account Info
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Name */}
              <div className="bg-[#d7eeff] rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#386FA4] flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faUser} className="text-white" width={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Full Name</p>
                  <p className="font-semibold text-[#133C55]">{user?.name || "—"}</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#d7eeff] rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#386FA4] flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" width={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email Address</p>
                  <p className="font-semibold text-[#133C55] break-all">{user?.email || "—"}</p>
                </div>
              </div>

              {/* Account ID */}
              <div className="bg-[#d7eeff] rounded-2xl p-5 flex items-start gap-4 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[#386FA4] flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-white" width={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Account ID</p>
                  <p className="font-mono text-sm text-[#133C55] break-all">{user?.id || "—"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity placeholder */}
          <div className="bg-white rounded-3xl shadow-md p-8 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 rounded-full bg-[#3F88C5]" />
              <h3 className="text-xs font-bold tracking-widest text-[#3F88C5] uppercase">
                Recent Activity
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#d7eeff] flex items-center justify-center">
                <FontAwesomeIcon icon={faBookOpen} className="text-[#386FA4]" width={28} />
              </div>
              <p className="text-[#133C55] font-semibold">No courses enrolled yet</p>
              <p className="text-sm text-gray-400 max-w-xs">
                Browse our catalogue and start your learning journey today.
              </p>
              <Link href="/all-courses">
                <button className="btn bg-[#133C55] hover:bg-[#386FA4] text-white rounded-xl border-none transition-all duration-300 hover:scale-105">
                  Browse Courses →
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
