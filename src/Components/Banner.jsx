/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PiStudentBold } from "react-icons/pi";
import 'animate.css';


const Banner = () => {
    return (
    <div className="relative bg-[#d7eeff] min-h-162.5 flex items-center overflow-hidden px-5 md:px-20 lg:px-40 py-10 lg:py-0">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          
          <h1 className="text-3xl md:text-5xl font-bold mb-8 ">
        Unlock your future with <span className="inline-block text-[#59A5D8] font-extrabold animate__animated animate__fadeInLeft">SkillSphere</span>
      </h1>

          <p className="text-md text-black max-w-lg opacity-80">
            Discover a wide range of expert-led courses tailored to your personal and professional
        growth. Learn at your own pace, access resources anytime, and unlock new
        opportunities with flexible, high-quality education designed for modern learners.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
           

            <Link href="/signup">
          <button className="btn bg-linear-to-r from-[#133C55] to-[#386FA4] hover:text-[#91E5F6]  px-4 py-2 rounded-2xl font-semibold text-md flex items-center gap-3 group text-white">
              Get Started
            </button>
        </Link>

          <Link href="/AllCourses">
            <button className="btn border border-[#59A5D8] hover:border-none hover:bg-[#386FA4] hover:text-white rounded-xl">
              All Courses
            </button>
          </Link>
            
          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-2xl"
              src={"/assets/Collaboration.png"}
              alt="Discussion for the best courses"
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;