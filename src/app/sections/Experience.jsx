"use client";
import { useState } from "react";
import ExperienceCard from "../components/ExperienceCard";
export default function Experience() {
  const [toggle, setToggle] = useState(false);

  const eduExperience = [
    { title: "PBA in Web development", type: "work", place: "Erhvervsakademi København (previously KEA), Copenhagen", comment: "Exploring new tech in the industry. My chosen electives are PHP and Security for Devs.", keypoints: ["Built web applications with expert feedback", "Learned languages like python and SQL", "Grown more comfortable in UX and design"], from: "2025 Q3", to: "present" },
    { title: "AP in Multimediadesign", type: "education", place: "Erhvervsakademi København (previously KEA), Copenhagen", comment: "Stepping stone into the world of digital interface and interactions.", keypoints: ["Studied the basics of web development and user interactions", "Working in teams and project management"], from: "2025 Q3", to: "present" },
  ];
  const workExperience = [
    { title: "PBA in Web development", type: "education", place: "Erhvervsakademi København (previously KEA), Copenhagen", comment: "Exploring new tech in the industry. My chosen electives are PHP and Security for Devs.", keypoints: ["Built web applications with expert feedback", "Learned languages like python and SQL", "Grown more comfortable in UX and design"], from: "2025 Q3", to: "present" },
    { title: "PBA in Web development", type: "education", place: "Erhvervsakademi København (previously KEA), Copenhagen", comment: "Exploring new tech in the industry. My chosen electives are PHP and Security for Devs.", keypoints: ["Built web applications with expert feedback", "Learned languages like python and SQL", "Grown more comfortable in UX and design"], from: "2025 Q3", to: "present" },
  ];

  return (
    <>
      <section>
        <h2>
          Education & <span className="text-(--c-primary)">work experience</span>
        </h2>
        <div className="flex gap-4">
          <button onClick={() => setToggle(false)} className={!toggle ? "btn-active" : "btn"}>
            Education
          </button>
          <button onClick={() => setToggle(true)} className={toggle ? "btn-active" : "btn"}>
            Work Experience
          </button>
        </div>

        <section className="grid grid-cols-[1fr_12fr] gap-2 my-6">
          <div className="flex place-content-center">
            <div className="bg-(--c-primary20) h-full w-0.75"></div>
          </div>
          <div>
            {!toggle && (
              <div className="flex flex-col gap-4">
                {/* Education */}
                {eduExperience.map((education, index) => (
                  <ExperienceCard key={index} {...education} index={index} />
                ))}
              </div>
            )}
            {toggle && (
              <div className="flex flex-col gap-4">
                {/* Work */}
                {workExperience.map((work, index) => (
                  <ExperienceCard key={index} {...work} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
}
