"use client";
import { useState } from "react";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "motion/react";

export default function Experience() {
  const [toggle, setToggle] = useState(false);

  const eduExperience = [
    { title: "PBA in Web development", type: "education", place: "Erhvervsakademi København (previously KEA), Copenhagen", comment: "Exploring new tech in the industry. My chosen electives are PHP and Security for Devs.", keypoints: ["Built web applications with expert feedback", "Learned languages like python and SQL", "Grown more comfortable in UX and design"], from: "2025 Q3", to: "present" },
    { title: "AP in Multimediadesign", type: "education", place: "Erhvervsakademi København (previously KEA), Copenhagen", comment: "Stepping stone into the world of digital interface and interactions.", keypoints: ["Studied the basics of web development and user interactions", "Working in teams and project management"], from: "2023 Q3", to: "2025 Q2" },
    { title: "STX, language programme", type: "education", place: "Nærum Gymnasium, Nærum", comment: "I enjoy languages hence the linguistic-heavy study programme, consisting of english A, spanish A and latin c.", keypoints: ["Base education", "3rd year elective was informatics - this is where my love for coding began"], from: "2017 Q3", to: "2020 Q2" },
  ];
  const workExperience = [
    { title: "Addressable content intern, DCO team", type: "work", place: "WPP Media Denmark (previously GroupM), Copenhagen", comment: "A 5-month internship at one of the biggest marketing companies in Denmark. The internship was education related.", keypoints: ["Designed and developed digital ad banners for major clients in industries like make-up, cars, hotels, nutrition and more", "Explored marketing-design and gained experience with addressable ads in marketing", "Communication across departments, eg. designers, client holders or brand activation"], from: "2025 Q1", to: "2025 Q2" },
    { title: "Ride operator", type: "work", place: "Tivoli Gardens, Copenhagen", comment: "Sabbatical job, sounds primitive but was a lot of fun.", keypoints: ["Service job operating amusement rides whilst assisting guests", "Occasionally make quick decisions in a stressful environment", "Evolved some great friendships from this workplace"], from: "2020 Q3", to: "2023 Q1" },
  ];

  return (
    <>
      <section id="experience">
        <h2>
          Education & <span className="text-(--c-primary)">work experience</span>
        </h2>
        <div className="flex gap-4 flex-wrap">
          <motion.button onClick={() => setToggle(false)} className={!toggle ? "btn-active" : "btn"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Education
          </motion.button>
          <motion.button onClick={() => setToggle(true)} className={toggle ? "btn-active" : "btn"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Work Experience
          </motion.button>
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
