"use client";

import { usePathname } from 'next/navigation'
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
    const pathname = usePathname()

    const isActive = (path) => pathname === path


  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full px-2 sm:px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h3 className="text-black text-2xl flex items-center">
            <FontAwesomeIcon
              icon={faStackOverflow}
              className="text-[#59A5D8] text-3xl sm:text-4xl"
            />
            <span className="text-[#133C55] font-extrabold">Skill</span>Sphere
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li><Link href="/"><button className={isActive('/') ? 'btn btn-active bg-[#386FA4] text-white' : 'btn btn-block hover:bg-[#386FA4] hover:text-white'}>
              Home
            </button></Link></li>
          <li><Link href="/all-courses"><button className={isActive('/all-courses') ? 'btn btn-active bg-[#386FA4] text-white' : 'btn btn-block hover:bg-[#386FA4] hover:text-white'}>
              All Courses
            </button></Link></li>
          <li><Link href="/profile"><button className={isActive('/profile') ? 'btn btn-active bg-[#386FA4] text-white' : 'btn btn-block hover:bg-[#386FA4] hover:text-white'}>
              Profile
            </button></Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
            <Link href="/signup">
          <button className="btn bg-linear-to-r from-[#133C55] to-[#386FA4] hover:text-[#91E5F6]  px-4 py-2 rounded-2xl font-semibold text-md flex items-center gap-3 group text-white">
              Get Started
            </button>
        </Link>
          <Link href="/signin">
            <button className="btn border border-[#59A5D8] hover:border-none hover:bg-[#386FA4] hover:text-white rounded-xl">
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/"><button className="btn btn-block hover:bg-[#386FA4] hover:text-white">
              Home
            </button></Link>
          <Link href="/all-courses"><button className="btn btn-block hover:bg-[#386FA4] hover:text-white">
              All Courses
            </button></Link>
          <Link href="/profile"><button className="btn btn-block hover:bg-[#386FA4] hover:text-white">
              Profile
            </button></Link>

            <Link href="/signup">
          <button className="btn btn-block bg-[#133C55] hover:bg-black  px-4 py-2 font-semibold text-md flex items-center gap-3 group text-white">
              Sign Up
            </button>
        </Link>

          <Link href="/signin">
            <button className="btn btn-block border border-[#59A5D8] hover:border-none hover:bg-[#386FA4] hover:text-white">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}