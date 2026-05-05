import AllCourses from "@/Components/AllCourses";



const Page = async () => {
  const res = await fetch("https://skillsphere-rosy.vercel.app/data.json");
  const courses = await res.json();

  return <AllCourses  courses={courses} />;
};

export default Page;