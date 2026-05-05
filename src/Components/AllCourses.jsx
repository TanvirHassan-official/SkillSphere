/* eslint-disable react/jsx-key */
"use client";
import { Suspense } from "react";

import { useState } from "react";
import Courses from "@/Components/Courses";
import Loader from "./Loader";

const AllCourses = ({ courses }) => {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-5 md:px-20 lg:px-40 mb-10">
      <div className="grid gap-3 items-center my-10">
        <h1 className="text-5xl font-bold text-center text-[#133C55]">
          All Courses
        </h1>
        <p className="text-xl text-center text-[#133C55] opacity-80">
          Browse all courses and find the perfect path to grow your skills.
        </p>

        <div className="grid justify-items-center">
                    <Suspense fallback={<Loader />}>
              <input
            type="text"
            placeholder="Course Name"
            className="input input-info"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          </Suspense>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(search ? filteredCourses : courses).map((course) => (





          <Suspense key={course.id} fallback={<Loader />}>
            <div >
              <Courses course={course} />
            </div>
          </Suspense>
          
        ))}
      </div>
    </div>
  );
};

export default AllCourses;