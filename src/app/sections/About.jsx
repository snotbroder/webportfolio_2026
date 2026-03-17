"use client";
import Image from "next/image";
import Abilities from "../components/Abilities.jsx";
import abilities from "@/copy/abilities.json";

export default function About() {
  return (
    <>
      <section id="about">
        <h2>
          About <span className="text-(--c-primary)">me</span>
        </h2>
        <section className="flex flex-col gap-12">
          <section className="flex flex-col gap-6 place-items-center lg:flex-row lg:gap-20 lg:place-items-start">
            <p>
              I’m a full-stack development student with <strong>over two years of experience</strong> building reliable, well-structured, and user-focused web applications, with a strong focus on usability, performance, and clean design. Originally from the Netherlands, I’ve lived in Denmark since childhood and now call Vesterbro, Copenhagen home, where I live with my partner and our dog. I speak <strong>Danish, English, and Dutch</strong>, have experience with <strong>German and Spanish</strong>, and enjoy working in international environments. Outside of work, I value time with friends, exploring the city, and traveling across Europe in my motorhome.
            </p>
            <div className="min-w-48 lg:min-w-64 silver-img-container">
              <Image className="silver-img" width={400} height={400} src="/silver.png" alt="Eurasier dog standing to the side, looking towards the camera"></Image>
              <p className="small mt-2">My sweet dog Silver</p>
            </div>
          </section>
          <section>
            <h3>My skills</h3>
            <p>These are languages, tools and methods I have experience with.</p>
            <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 xl:grid-cols-4">
              {abilities.map((ability, index) => (
                <Abilities key={index} index={index} {...ability} />
              ))}
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
