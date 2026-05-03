import Image from "next/image";
import Banner from "@/Components/Banner";
import AllCourses from "@/Components/AllCourses";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AllCourses></AllCourses>
    </div>
  );
}
