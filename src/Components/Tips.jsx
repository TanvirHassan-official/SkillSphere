/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Tips = () => {
    return (
        <div className="bg-[#d7eeff] py-10">
                        <div className="grid gap-3 items-center my-10">
                <h1 className="text-5xl font-bold text-center text-[#133C55]">Pro Tips</h1>
                <p className="text-xl text-center text-[#133C55] opacity-80">Learn better and use the easy way with our Instructors.</p>
            </div>

            <div className="relative  flex items-center overflow-hidden px-5 md:px-20 lg:px-40 py-10 lg:py-0">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4">

                        <h1 className="text-3xl md:text-5xl font-bold mb-8 ">
                            1. Learn in Short, Focused Sessions
                        </h1>

                        <p className="text-md text-black max-w-lg opacity-80">
                            Discover a wide range of expert-led courses tailored to your personal and professional
                            growth. Learn at your own pace, access resources anytime, and unlock new
                            opportunities with flexible, high-quality education designed for modern learners.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                className="relative h-96 w-auto object-contain drop-shadow-2xl rounded-2xl py-8"
                                src={"/assets/Collaboration.png"}
                                alt="Clicking for the best tools"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div className="relative bg-[#d7eeff] flex items-center overflow-hidden px-5 md:px-20 lg:px-40 py-10 lg:py-0">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

                    {/* left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative">
                            <img
                                className="relative h-96 w-auto object-contain drop-shadow-2xl rounded-2xl py-8"
                                src={"/assets/Collaboration.png"}
                                alt="Clicking for the best tools"
                            />
                        </div>
                    </div>
                    {/* right Content */}
                    <div className="space-y-4">

                        <h1 className="text-3xl md:text-5xl font-bold mb-8 ">
                            1. Learn in Short, Focused Sessions
                        </h1>

                        <p className="text-md text-black max-w-lg opacity-80">
                            Discover a wide range of expert-led courses tailored to your personal and professional
                            growth. Learn at your own pace, access resources anytime, and unlock new
                            opportunities with flexible, high-quality education designed for modern learners.
                        </p>
                    </div>


                </div>
            </div>
            <div className="relative bg-[#d7eeff] flex items-center overflow-hidden px-5 md:px-20 lg:px-40 py-10 lg:py-0">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4">

                        <h1 className="text-3xl md:text-5xl font-bold mb-8 ">
                            1. Learn in Short, Focused Sessions
                        </h1>

                        <p className="text-md text-black max-w-lg opacity-80">
                            Discover a wide range of expert-led courses tailored to your personal and professional
                            growth. Learn at your own pace, access resources anytime, and unlock new
                            opportunities with flexible, high-quality education designed for modern learners.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                className="relative h-96 w-auto object-contain drop-shadow-2xl rounded-2xl py-8"
                                src={"/assets/Collaboration.png"}
                                alt="Clicking for the best tools"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tips;