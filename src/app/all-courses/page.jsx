import Courses from "@/Components/Courses";


const AllCourses = async () => {
    // const {category} = await Params;
    const res = await fetch('https://skillsphere-rosy.vercel.app/data.json')

    const courses = await res.json()

    // const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos
    // console.log(filteredPhotos)
    return (
        < div className="px-5 md:px-20 lg:px-40 mb-10">
            <div className="grid gap-3 items-center my-10">
                <h1 className="text-5xl font-bold text-center text-[#133C55]">All Courses</h1>
                <p className="text-xl text-center text-[#133C55] opacity-80">Browse all courses and find the perfect path to grow your skills.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                courses.map(course =>
                    <div key={course.id}>
                        <div>

                            <div>
                                <Courses course={course}></Courses>
                            </div>
                        </div>
                    </div>)
            }
            </div>
            
        </div>

    );
};

export default AllCourses;


