"use client";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

import { motion } from "motion/react";

export default function ExperienceCard({ index, title, type, place, comment, keypoints, from, to }) {
  let IconComponent;
  switch (type) {
    case "education":
      IconComponent = <MdOutlineSchool className="text-5xl md:text-xl" />;
      break;

    case "work":
      IconComponent = <MdOutlineWorkOutline className="text-5xl md:text-xl" />;
      break;

    default:
      IconComponent = <FaRegStar className="text-5xl md:text-xl" />;
  }

  return (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex flex-col gap-2 bg-(--c-secondary5) border border-(--c-secondary10) rounded-md p-6 experience-card">
      <div>
        <h3>{title}</h3>
        <div className="flex gap-4 place-items-center text-(--c-primary)">
          {IconComponent}
          <h4 className="text-(--c-primary)!">{place}</h4>
        </div>
      </div>
      <p>{comment}</p>
      <ul>
        {keypoints.map((keypoint, index) => (
          <li key={index} className="flex place-items-center gap-2">
            <div className="bg-(--c-primary) w-1.5 h-1.5 rounded-md"></div>
            <p className="text-(--c-secondary)! small">{keypoint}</p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
