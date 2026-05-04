import Image from "next/image";
import Banner from "@/Components/Banner";
import AllCourses from "./all-courses/page";
import TopCourses from "./top-courses/page";
import Stats from "@/Components/Stats";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCourses></TopCourses>
      <Stats></Stats>
    </div>
  );
}
