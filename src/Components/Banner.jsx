import Link from "next/link";
import 'animate.css';
import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative bg-[#d7eeff] min-h-162.5 flex items-center overflow-hidden px-5 md:px-20 lg:px-40 py-16 lg:py-8">

            {/* Decorative background blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#59A5D8] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#133C55] opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">

                {/* Left Content */}
                <div className="space-y-6 animate__animated animate__fadeInLeft">

                    {/* Label */}
                    <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-[#3F88C5] animate-pulse" />
                        <span className="text-xs font-bold tracking-widest text-[#3F88C5] uppercase">
                            #1 Online Learning Platform
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-[#133C55] leading-tight">
                        Unlock your future with{" "}
                        <span className="text-[#3F88C5] font-extrabold relative">
                            SkillSphere
                        </span>
                    </h1>

                    <p className="text-base text-[#133C55]/70 max-w-lg leading-relaxed">
                        Discover a wide range of expert-led courses tailored to your personal and professional
                        growth. Learn at your own pace, access resources anytime, and unlock new
                        opportunities with flexible, high-quality education designed for modern learners.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link href="/signup">
                            <button className="btn bg-[#133C55] hover:bg-[#386FA4] text-white px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                Get Started →
                            </button>
                        </Link>

                        <Link href="/all-courses">
                            <button className="btn bg-white/70 backdrop-blur-sm border border-[#59A5D8] hover:bg-[#386FA4] hover:text-white hover:border-transparent text-[#133C55] px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105">
                                All Courses
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end animate__animated animate__fadeInRight">

                    {/* Glow blob behind image */}
                    <div className="absolute inset-0 bg-[#3F88C5] opacity-10 rounded-full blur-3xl scale-90" />

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/assets/Collaboration.png"
                            alt="Discussion for the best courses"
                            height={412}
                            width={464}
                            className="object-contain hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
