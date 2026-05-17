import Image from "next/image";
import courses from "@/../public/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faUser, faCheck } from "@fortawesome/free-solid-svg-icons";


const levelColors = {
    Beginner: "#2ecc71",
    Intermediate: "#3F88C5",
    Advanced: "#e67e22",
};


const CourseDetails = async({ params }) => {
    
    const { id } = await params;
    const res = await fetch('https://skillsphere-rosy.vercel.app/data.json')
    const courses = await res.json()

    const course = courses.find((p) => p.id == id);

    const levelColor = levelColors[course.level] ?? "#3F88C5";

    return (
        <div className="px-5 md:px-20 lg:px-40 py-12">

            {/* Header */}
            <div className="mb-10 space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-px w-8 rounded-full bg-[#3F88C5]" />
                    <span className="text-xs font-bold tracking-widest text-[#3F88C5] uppercase">
                        {course.category}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#133C55] leading-tight">
                    {course.title}
                </h1>
            </div>

            {/* Top Section: Image + Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">

                {/* Image */}
                <div className="relative w-full">
                    <div className="absolute -inset-3 rounded-3xl opacity-20 blur-xl bg-[#3F88C5]" />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>
                </div>

                {/* Details Card */}
                <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-500 p-6 space-y-5">

                    <h2 className="text-xl md:text-2xl font-bold text-[#133C55]">
                        Course Details
                    </h2>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                        <span
                            className="px-3 py-1 rounded-full text-white text-xs font-semibold shadow"
                            style={{ backgroundColor: levelColor }}
                        >
                            {course.level}
                        </span>
                        <span className="px-3 py-1 rounded-full text-white text-xs font-semibold shadow bg-[#3F88C5]">
                            {course.category}
                        </span>
                    </div>

                    <div className="h-px w-full bg-gray-100" />

                    {/* Stats Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faStar} className="text-[#f5c518]" width={14} height={14} />
                                <span className="text-lg font-bold text-[#133C55]">{course.rating}</span>
                            </div>
                            <span className="text-xs text-gray-400">Rating</span>
                        </div>

                        <div className="h-8 w-px bg-gray-200" />

                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faClock} className="text-[#3F88C5]" width={16} height={16} />
                                <span className="text-lg font-bold text-[#133C55]">{course.duration}</span>
                            </div>
                            <span className="text-xs text-gray-400">Duration</span>
                        </div>

                        <div className="h-8 w-px bg-gray-200" />

                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faUser} className="text-[#3F88C5]" width={16} height={16} />
                                <span className="text-sm font-bold text-[#133C55]">{course.instructor}</span>
                            </div>
                            <span className="text-xs text-gray-400">Instructor</span>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gray-100" />

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                        {course.description}
                    </p>

                    {/* Enroll Button */}
                    <button className="w-full py-3 rounded-xl text-white font-semibold text-sm bg-[#133C55] hover:bg-[#386FA4] transition-colors duration-300 hover:scale-105 transform">
                        Enroll Now →
                    </button>
                </div>
            </div>

            {/* What You Will Learn */}
            <div className="bg-white rounded-3xl shadow-md p-8 space-y-6">

                {/* Section Header */}
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="h-px w-8 rounded-full bg-[#3F88C5]" />
                        <span className="text-xs font-bold tracking-widest text-[#3F88C5] uppercase">
                            Curriculum
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#133C55]">
                        What You Will Learn
                    </h2>
                </div>

                <div className="h-px w-full bg-gray-100" />

                {/* Learn Items */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course?.whatYouWillLearn?.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div
                                className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center shadow"
                                style={{ backgroundColor: levelColor }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="text-white" width={18} height={18} />
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseDetails;
