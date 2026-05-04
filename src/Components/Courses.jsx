/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Courses =({course}) => {


    return (
        <div>
                            
                            <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
                                
                                <figure className="relative w-full aspect-square">
                                    <img src={course.image} alt={course.title} 
                                    className="object-cover rounded-xl w-full h-full"
                                    
                                    
                                    />
                                </figure>
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-lg sm:text-xl md:text-2xl">{course.title}</h2>
                                    <p className="opacity-80 text-sm sm:text-base">{course.description}</p>
                                    <div>
                                        <p>Instructor: <span className="font-bold">{course.instructor}</span></p>
                                        <p className="flex items-center gap-2">Rating:<FontAwesomeIcon icon={faStar}
                                            className="text-[#59A5D8] text-xl sm:text-lg"/>
                                             <span className="font-bold">{course.rating}</span></p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-block border hover:border-[#59A5D8] bg-[#386FA4] hover:bg-white hover:text-black text-white rounded-xl">Course Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
    );
};


export default Courses;



