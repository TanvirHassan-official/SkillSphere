import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
const levelColors = {
    Beginner: { bg: "#2ecc71", label: "Beginner" },
    Intermediate: { bg: "#3F88C5", label: "Intermediate" },
    Advanced: { bg: "#e67e22", label: "Advanced" },
};


const Courses = ({ course }) => {
    const level = levelColors[course.level] ?? { bg: "#3F88C5", label: course.level };

    return (
        <Link href={`/all-courses/${course.id}`}>
        <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            {/* Level Badge */}
            <div
                className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wide shadow"
                style={{ backgroundColor: level.bg }}
            >
                {level.label}
            </div>

            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-[#133C55]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Card Body */}
            <div className="flex flex-col gap-2 p-5 flex-1">

                {/* Category tag */}
                <span className="text-xs font-semibold tracking-widest text-[#3F88C5] uppercase">
                    {course.category}
                </span>

                <h2 className="text-lg sm:text-xl font-bold text-[#133C55] leading-snug">
                    {course.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {course.description}
                </p>

                <p className="text-sm text-gray-600">
                    By <span className="font-semibold text-[#133C55]">{course.instructor}</span>
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gray-100 my-1" />

                {/* Stats + CTA */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faStar} className="text-[#f5c518]" width={14} height={14} />
                            <span className="text-base font-bold text-[#133C55]">{course.rating}</span>
                        </div>
                        <span className="text-xs text-gray-400">Rating</span>
                    </div>

                    <div className="h-8 w-px bg-gray-200" />

                    <div className="flex flex-col items-center">
                        <span className="text-base font-bold text-[#133C55]">{course.duration}</span>
                        <span className="text-xs text-gray-400">Duration</span>
                    </div>

                    <div className="h-8 w-px bg-gray-200" />

                    
                        <button className="text-xs font-semibold text-[#3F88C5] border border-[#3F88C5] px-3 py-1.5 rounded-xl hover:bg-[#3F88C5] hover:text-white transition-colors duration-300 cursor-pointer">
                            View Details
                        </button>
                    
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Courses;
