"use client";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectInfo = [
    { title: "Dupeflix, a dupe of Netflix", img: "/dupeflix.webp", href: "snotbroder.eu.pythonanywhere.com", github: "github.com/snotbroder/netflix_dupe", stack: ["Python", "MySQL", "MojoCSS", "Flask", "Jinja2"], year: "2025", copy: "Exam project for WEB course, 1st semester PBA Webdev, minus the streaming feature. Switch languages, sign up or login, create reviews or comment and more. Try for yourself using “niels@email.com” with “password”." },
    { title: "Ward -robe", img: "/ward-robe.webp", href: "voorde.dk/UX2025-exam/index.html", github: "github.com/GilesS420/Exam_project_UX", stack: ["Figma", "HTML", "Javascript", "CSS"], year: "2025", copy: "Exam project for UX course, 1st semester PBA Webdev. The focus of this project is accessability, semantics, working in groups, UX and design. I was responsible for the design and accessability. Note: The backend system is built locally, so login does not work." },
    { title: "Restaurant Lamar, redesign ", img: "/lamar.webp", href: "4sem-eksamensprojekt.vercel.app", github: "github.com/snotbroder/4sem_eksamensprojekt", stack: ["Next.js", "TailwindCSS", "Supabase", "Figma"], year: "2025", copy: "Final Multimediadesign AP project. Redesign of their website. My task was developing the page and its appertaining dashboard - used for updating seasonal menus." },
  ];
  return (
    <section>
      <h2>
        Featured <span className="text-(--c-primary)">projects</span>
      </h2>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:place-items-start place-items-center ">
        {projectInfo.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
