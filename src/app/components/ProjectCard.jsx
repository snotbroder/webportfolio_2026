"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image";

export default function ProjectCard({ index, title, href, copy, img, year, stack, github }) {
  return (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex flex-col grow flex-1 max-w-132 min-h-141 bg-(--c-secondary5) border border-(--c-secondary10) rounded-md overflow-hidden">
      <div className="relative min-h-64 overflow-hidden grid place-content-center">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-(--backdrop50) to-transparent"></div>
        <Image className="object-cover " fill src={img} alt="Project thumbnail"></Image>
      </div>

      <section className="flex flex-col gap-4 p-6">
        <div className="flex gap-3 place-items-center">
          <h3>{title}</h3>
          <div className="capitalize w-fit h-fit px-2 bg-(--c-accent10-ylw) border border-(--c-accent20-ylw) rounded-xl" key={index}>
            <p className="small text-(--c-accent-ylw)!">{year}</p>
          </div>
        </div>
        <p className="">{copy}</p>
        <section className="flex flex-wrap gap-2">
          {stack.map((singleStack, index) => (
            <div className="capitalize px-2 md:-py-2 bg-(--c-primary10) border border-(--c-primary20) rounded-3xl" key={index}>
              <p className="small text-(--c-primary)!">{singleStack}</p>
            </div>
          ))}
        </section>
      </section>
      <div className="px-6 py-4 flex gap-6">
        <Link target="_blank" href={`https://${github}`} className="flex gap-1 place-items-center hover:text-(--c-secondary) ease-in transition-all text-(--c-tertiary)">
          <IoLogoGithub />
          Github repo
        </Link>
        <Link target="_blank" href={`https://${href}`} className="flex gap-1 place-items-center hover:text-(--c-secondary) ease-in transition-all text-(--c-tertiary)">
          <MdOutlineOpenInNew />
          Live demo
        </Link>
      </div>
    </motion.article>
  );
}
