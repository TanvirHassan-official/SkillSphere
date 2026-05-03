/* eslint-disable @next/next/no-img-element */
const AllCourses = async () => {
    const res = await fetch('https://skillsphere-rosy.vercel.app/data.json')

    const courses = await res.json()

    return (
        <div>
            <h1>Courses</h1>
            <div>
                {
                    courses.map(course =>
                        <div key={course.id}>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                
                                <figure>
                                    <img src={course.image} alt={course.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default AllCourses;