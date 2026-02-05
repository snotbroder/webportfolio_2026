'use client'

import { FaCode } from "react-icons/fa6";
import { TbDatabase } from "react-icons/tb";
import { MdOutlinePalette } from "react-icons/md";
import { PiGearBold } from "react-icons/pi";
import { motion } from "motion/react";

export default function Abilities({ icon, title, text, index }) {
  let IconComponent;

  switch (icon) {
    case "code":
      IconComponent = <FaCode />;
      break;

    case "db":
      IconComponent = <TbDatabase />;
      break;

    case "ux":
      IconComponent = <MdOutlinePalette />;
      break;

    case "gear":
      IconComponent = <PiGearBold />;
      break;

    default:
      IconComponent = <FaCode />;
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col grow flex-1 gap-2 bg-(--c-secondary5) border border-(--c-secondary10) rounded-md p-6 duration-200 ease-in hover:bg-(--c-secondary10)">
      <div className="h-12 w-12 bg-(--c-primary10) flex place-content-center items-center rounded-lg text-(--c-primary) text-2xl">
        {IconComponent}
      </div>
      <h4>{title}</h4>
      <p className="small">{text}</p>
    </motion.article>
  );
}