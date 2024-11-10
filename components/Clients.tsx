// Education.tsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const education = [
  {
    name: "Symbiosis Institute of Technology",
    title: "2022 - 2026",
    image: "/SIT.png",
    quote: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base text-purple">
          B.Tech Computer Science
        </h3>
        <p className="text-sm">GPA: 8.4</p>
        <p className="text-xs text-gray-400">Pune, India</p>
      </div>
    ),
  },
  {
    name: "Arham Junior College",
    title: "2020 – 2022",
    image: "/arham.png",
    quote: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base text-purple">
          Pre-University Education
        </h3>
        <p className="text-sm">Grade: 80%</p>
        <p className="text-xs text-gray-400">Pune, India</p>
      </div>
    ),
  },
  {
    name: "Hume McHenry School",
    title: "2009 – 2020",
    image: "/hume.jpg",
    quote: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base text-purple">Secondary Education</h3>
        <p className="text-sm">Grade: 89.33%</p>
        <p className="text-xs text-gray-400">Pune, India</p>
      </div>
    ),
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <h1 className="heading">
        My Academic
        <span className="text-purple"> Journey</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[40vh] md:h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={education}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-800"
            >
              <h3 className="font-semibold text-sm text-purple">{edu.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{edu.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
