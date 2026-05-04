/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://skillsphere-rosy.vercel.app/data.json')
    const courses = await res.json()

    const course = courses.find(p => p.id == id)

    console.log(course);

    return (
        <div className="px-5 md:px-20 lg:px-40 py-10 ">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 ">
                {course.title}
            </h1>


            <div className="relative flex items-center overflow-hidden ">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

                    {/* left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative">
                            <img
                                className=" h-96 w-auto object-contain drop-shadow-2xl rounded-2xl py-8"
                                src={course.image}
                                alt={course.title}
                            />
                        </div>
                    </div>
                    {/* right Content */}
                    <div className="space-y-4">
                        <h1 className="text-xl md:text-3xl font-bold mb-8 ">
                            Course Details:
                        </h1>
                        <div className="flex gap-4">
                            <div className="badge badge-outline bg-[#3F88C5] px-6 py-4 text-white"><p className="flex items-center gap-2"><FontAwesomeIcon icon={faStar}
                                className="text-white text-lg" />
                                {course.rating}</p></div>
                            <div className="badge badge-outline bg-[#3F88C5] px-6 py-4 text-white">{course.category}</div>
                            <div className="badge badge-outline bg-[#3F88C5] px-6 py-4 text-white">{course.level}</div>
                        </div>

                        <p className="text-md text-black max-w-lg opacity-80">
                            <span className="font-bold">Duration: </span> {course.duration}
                        </p>
                        <p className="text-md text-black max-w-lg opacity-80">
                            <span className="font-bold">Description: </span> {course.description}
                        </p>
                        <p className="text-md text-black max-w-lg opacity-80">
                            <span className="font-bold">Instructor: </span>{course.instructor}
                        </p>



                    </div>


                </div>
            </div>

            <h1 className="text-xl md:text-3xl font-bold mb-8 ">
                What You Will Learn:
            </h1>

            <div>
                <ul className="space-y-2 text-xl ">
                    {course?.whatYouWillLearn?.map((item, index) => (
                        
                        <li key={index} className="border-l-8 border-[#3F88C5] pl-2">
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>  </div>
    );
};

export default CourseDetails;