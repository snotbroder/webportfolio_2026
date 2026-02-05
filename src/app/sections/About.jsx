'use client'
import Image from "next/image";
import Abilities from "../components/Abilities.jsx";
import abilities from "@/copy/abilities.json";

export default function About() {

  return (
    <section>
      <h2>About <span className="text-(--c-primary)">me</span></h2>
      <section className="group flex flex-col gap-8 bg-(--c-secondary5) rounded-md border border-(--c-secondary10) overflow-hidden md:flex-row">
        <div className="flex flex-col gap-8 p-4 md:p-6 lg:p-10">
          <p><span className="highlight">Hej I&apos;m Joris!</span> I&apos;m a commited full-stack developer student with 2+ years of experience creating robust, secure and scalable web applications. I have a broad knowledge of the tools in the industry and a keen eye for design and user experience.</p>
          <p><span className="highlight">I&apos;m based in Vesterbro,</span> Copenhagen, where I live with my partner and our dog. Originally from the Netherlands, I&apos;ve called Denmark home since I was six, growing up just north of the city.</p>
          <p><span className="highlight">I&apos;m passionate about languages</span> and communication, speaking Danish, English, Dutch, and having experience with German and Spanish. When I&apos;m not working on creative or technical projects, you&apos;ll usually find me spending time with friends, exploring the city with my dog, or enjoying a good conversation over a drink.</p>
        </div>
        <div className="relative bg-(--c-accent10-ylw) md:min-w-2xs group-hover:bg-(--c-primary10) duration-300 ease-in-out">
          <div className="absolute w-[35%] h-full bg-linear-to-r from-(--backdrop75) to-transparent"></div>
          <Image className="aspect-square object-cover rounded-sm md:aspect-auto md:h-full" width={800} height={1200} loading="eager" alt="Black and white portrait of person smiling directly to the camera, wearing a black half zipper shirt." src="/me.png"></Image>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 xl:grid-cols-4">
        {abilities.map((ability, index) => (
          <Abilities
            key={index}
            index={index}
            {...ability}
          />
        ))}

      </div>
    </section>
  );
}
