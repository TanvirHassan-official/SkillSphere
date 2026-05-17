import Image from 'next/image';
const Tips = () => {
    return (
        <div className="bg-[#d7eeff] py-10">
            <div className="flex flex-col items-center gap-3 mb-12">
                <span className="text-xs font-semibold tracking-widest text-[#3F88C5] uppercase">
                    Follow the Tips
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#133C55] leading-tight">
                    Guidance from the Best
                </h1>
                <p className="text-lg text-center text-[#133C55]/70 max-w-xl">
                    Learn better and use the easy way with our Instructors.
                </p>

                {/* Decorative line */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="h-px w-12 bg-[#3F88C5]" />
                    <div className="h-2 w-2 rounded-full bg-[#3F88C5]" />
                    <div className="h-px w-12 bg-[#3F88C5]" />
                </div>
            </div>



            <div className="relative  flex items-center overflow-hidden px-5 md:px-20 lg:px-40 py-10 lg:py-5">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4">

                        <h1 className="text-2xl md:text-4xl font-bold mb-8 ">
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
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                className="object-contain hover:scale-105 transition-transform duration-700"
                                src={"/assets/focus.jpg"}
                                alt="Clicking for the best tools"
                                height={520}
                                width={780}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div className="relative bg-[#d7eeff] flex items-center overflow-hidden px-5 md:px-20 lg:px-40 py-10 lg:py-5">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

                    {/* left Image */}
                    <div className="relative flex justify-center lg:justify-start order-2 md:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                className="object-contain hover:scale-105 transition-transform duration-700"
                                src={"/assets/c.jpg"}
                                alt="Clicking for the best tools"
                                height={520}
                                width={780}
                                priority
                            />
                        </div>
                    </div>
                    {/* right Content */}
                    <div className="space-y-4 order-1 md:order-2">

                        <h1 className="text-2xl md:text-4xl font-bold mb-8 ">
                            2. Practice Consistently with Real Projects
                        </h1>

                        <p className="text-md text-black max-w-lg opacity-80">
                            Apply what you learn through hands-on projects, case studies, or real-world tasks. This helps you retain knowledge better and build practical skills that employers actually value.
                        </p>
                    </div>


                </div>
            </div>
            <div className="relative bg-[#d7eeff] flex items-center overflow-hidden px-5 md:px-20 lg:px-40 py-10 lg:py-5">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4">

                        <h1 className="text-2xl md:text-4xl font-bold mb-8 ">
                            3. Set Clear Goals and Track Progress
                        </h1>

                        <p className="text-md text-black max-w-lg opacity-80">
                            Define what you want to achieve before you start learning, then break it into small milestones. Regularly reviewing your progress keeps you motivated and helps you stay focused on your long-term success.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                className="object-contain hover:scale-105 transition-transform duration-700"
                                src={"/assets/goals.jpg"}
                                alt="Clicking for the best tools"
                                height={520}
                                width={780}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tips;