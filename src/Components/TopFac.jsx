import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
const instructors = [
    {
        src: "/assets/t1.jpg",
        name: "Alex Doe",
        title: "Senior Web Developer",
        courses: "100+",
        rating: "4.8",
        badge: "Top Rated",
        badgeColor: "#3F88C5",
    },
    {
        src: "/assets/t2.jpg",
        name: "Mark Son",
        title: "Data Science Expert",
        courses: "60+",
        rating: "4.9",
        badge: "Best Seller",
        badgeColor: "#2ecc71",
    },
    {
        src: "/assets/t3.jpg",
        name: "David Lee",
        title: "UI/UX Designer",
        courses: "20+",
        rating: "4.6",
        badge: "Rising Star",
        badgeColor: "#e67e22",
    },
];


const InstructorCard = ({ instructor }) => (
    <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

        {/* Badge */}
        <div
            className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wide shadow"
            style={{ backgroundColor: instructor.badgeColor }}
        >
            {instructor.badge}
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square overflow-hidden">
            <Image
                src={instructor.src}
                alt={`${instructor.name} - instructor photo`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#133C55]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Card Body */}
        <div className="flex flex-col gap-2 p-5">
            <div>
                <h2 className="text-xl font-bold text-[#133C55]">{instructor.name}</h2>
                <p className="text-sm text-gray-500">{instructor.title}</p>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-100">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-[#133C55]">{instructor.courses}</span>
                    <span className="text-xs text-gray-400">Courses</span>
                </div>

                <div className="h-8 w-px bg-gray-200" />

                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faStar} className="text-[#f5c518]" width={14} height={14} />
                        <span className="text-lg font-bold text-[#133C55]">{instructor.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">Rating</span>
                </div>

                <div className="h-8 w-px bg-gray-200" />

                <button
                    className="text-xs font-semibold text-[#3F88C5] border border-[#3F88C5] px-3 py-1.5 rounded-xl hover:bg-[#3F88C5] hover:text-white transition-colors duration-300"
                >
                    View Profile
                </button>
            </div>
        </div>
    </div>
);

const TopFac = () => {
    return (
        <section className="my-20 px-4 sm:px-8 md:px-16 lg:px-24">

            {/* Header */}
            <div className="flex flex-col items-center gap-3 mb-12">
                <span className="text-xs font-semibold tracking-widest text-[#3F88C5] uppercase">
                    Meet the Experts
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#133C55] leading-tight">
                    Our Top Instructors
                </h1>
                <p className="text-lg text-center text-[#133C55]/70 max-w-xl">
                    Learn from industry professionals who have guided thousands of students to success.
                </p>

                {/* Decorative line */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="h-px w-12 bg-[#3F88C5]" />
                    <div className="h-2 w-2 rounded-full bg-[#3F88C5]" />
                    <div className="h-px w-12 bg-[#3F88C5]" />
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {instructors.map((instructor) => (
                    <InstructorCard key={instructor.name} instructor={instructor} />
                ))}
            </div>
        </section>
    );
};

export default TopFac;
