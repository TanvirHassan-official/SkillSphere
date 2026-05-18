import Courses from "@/Components/Courses";

const FeaturedCourses = async() => {

    const res = await fetch('https://skillsphere-rosy.vercel.app/data.json')

    const courses = await res.json()

    const topCourses = courses
        ? [...courses]
            .slice(6, 3)
        : [];

    return (
        < div className="px-5 md:px-20 lg:px-40 my-20">

            <div className="flex flex-col items-center gap-3 mb-12">
                <span className="text-xs font-semibold tracking-widest text-[#3F88C5] uppercase">
                    Your Top Demand
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#133C55] leading-tight">
                    Our Featured Courses
                </h1>
                <p className="text-lg text-center text-[#133C55]/70 max-w-xl">
                    Dive in and find the perfect path to grow your skills.
                </p>

                {/* Decorative line */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="h-px w-12 bg-[#3F88C5]" />
                    <div className="h-2 w-2 rounded-full bg-[#3F88C5]" />
                    <div className="h-px w-12 bg-[#3F88C5]" />
                </div>
            </div>




            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    topCourses.map(topCourse =>
                        <div key={topCourse.id}>
                            <div>

                                <div>
                                    <Courses course={topCourse}></Courses>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>

    );
};

export default FeaturedCourses;