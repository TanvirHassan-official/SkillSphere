import Courses from "@/Components/Courses";


const TopCourses = async () => {
    // const {category} = await Params;
    const res = await fetch('https://skillsphere-rosy.vercel.app/data.json')

    const courses = await res.json()
console.log(courses)
const topCourses = courses
  ? [...courses]
      .sort((a, b) => b.rating - a.rating) // highest first
      .slice(0, 3) // take top 3
  : [];
     console.log(topCourses)
    return (
        < div className="px-5 md:px-20 lg:px-40">
            <div className="grid gap-3 items-center my-10">
                <h1 className="text-5xl font-bold text-center text-[#133C55]">Top Courses</h1>
                <p className="text-xl text-center text-[#133C55] opacity-80">Browse best courses and find the perfect path to grow your skills.</p>
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

export default TopCourses;


