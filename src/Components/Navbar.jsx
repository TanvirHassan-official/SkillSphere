"use client";

import { usePathname } from 'next/navigation';
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow} from "@fortawesome/free-brands-svg-icons";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-courses", label: "All Courses" },
    { href: "/profile", label: "Profile" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full px-4 sm:px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <FontAwesomeIcon
                        icon={faStackOverflow}
                        className="text-[#3F88C5] text-3xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xl font-black text-[#133C55]">
                        Skill<span className="text-[#3F88C5]">Sphere</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-1 text-sm">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href}>
                                <button
                                    className={`btn px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                                        isActive(href)
                                            ? "bg-[#386FA4] text-white shadow"
                                            : "text-[#133C55] hover:bg-[#d7eeff] hover:text-[#386FA4]"
                                    }`}
                                >
                                    {label}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <Link href="/signin">
                        <button className="btn px-4 py-2 rounded-xl font-semibold text-sm border border-[#3F88C5] text-[#133C55] hover:bg-[#3F88C5] hover:text-white transition-all duration-300 hover:scale-105">
                            Sign In
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="btn px-4 py-2 rounded-xl font-semibold text-sm bg-[#133C55] text-white hover:bg-[#386FA4] transition-all duration-300 hover:scale-105 shadow">
                            Get Started →
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="btn md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-[#133C55] hover:bg-[#d7eeff] transition-colors duration-300"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden flex flex-col gap-2 px-4 pb-5 pt-2 border-t border-gray-100 bg-white/95 backdrop-blur-md animate__animated animate__fadeIn">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} onClick={() => setOpen(false)}>
                            <button
                                className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                                    isActive(href)
                                        ? "bg-[#386FA4] text-white"
                                        : "text-[#133C55] hover:bg-[#d7eeff] hover:text-[#386FA4]"
                                }`}
                            >
                                {label}
                            </button>
                        </Link>
                    ))}

                    <div className="h-px w-full bg-gray-100 my-1" />

                    <Link href="/signin" onClick={() => setOpen(false)}>
                        <button className="w-full px-4 py-2.5 rounded-xl font-semibold text-sm border border-[#3F88C5] text-[#133C55] hover:bg-[#3F88C5] hover:text-white transition-all duration-300">
                            Sign In
                        </button>
                    </Link>
                    <Link href="/signup" onClick={() => setOpen(false)}>
                        <button className="w-full px-4 py-2.5 rounded-xl font-semibold text-sm bg-[#133C55] text-white hover:bg-[#386FA4] transition-all duration-300">
                            Get Started →
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
