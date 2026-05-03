"use client";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">

          <h3 className="text-black text-2xl">
            <FontAwesomeIcon
              icon={faStackOverflow}
              className="text-[#a0d070] ml-4 text-4xl"
            />
            <span className="text-[#203010] font-extrabold">Skill</span>Sphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-courses"}>All Courses</Link>
          </li>

          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center  text-sm gap-4">
            <li>
              <Link href={"/signup"}><button className="btn bg-[#A0D070] hover:bg-[#203010] hover:text-white rounded-xl">Get Started</button> </Link>
            </li>
            <li>
              <Link href={"/signin"}><button className="btn border border-black hover:bg-[#203010] hover:text-white rounded-xl">Sign In</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;