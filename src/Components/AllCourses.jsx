const AllCourses = async () => {
    const res =await fetch('https://skillsphere-rosy.vercel.app/data.json')

const courses = await res.json()
console.log(courses);
    return (
        <div>
            <h1>Courses</h1>
            <div>
                {
                    courses.map(course => <div key={course.id}>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllCourses;