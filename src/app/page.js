import Image from "next/image";
import Banner from "@/Components/Banner";
import AllCourses from "./all-courses/page";
import TopCourses from "./top-courses/page";
import Stats from "@/Components/Stats";
import Tips from "@/Components/Tips";
import TopFac from "@/Components/TopFac";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCourses></TopCourses>
      <Stats></Stats>
      <TopFac></TopFac>
      <Tips></Tips>
    </div>
  );
}
