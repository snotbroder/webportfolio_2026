"use client";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <>
      <section className="grid grid-cols-1">
        <section className="flex flex-col gap-8">
          <div className="flex-col">
            <h1 className="sub-hero">Hi I&apos;m</h1>
            <h1>Joris</h1>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex gap-4">
              <li>
                <a aria-label="Github page button" className="w-12 h-12 bg-(--c-secondary5) border border-(--c-secondary10) rounded-lg hover:bg-(--c-secondary10) hover:text-(--c-primary) flex place-content-center" target="_blank" href="https://github.com/snotbroder">
                  <IoLogoGithub className="text-2xl my-auto hover:text-(--c-primary)" />
                </a>
              </li>
              <li>
                <a aria-label="LinkedIn button" className="w-12 h-12 bg-(--c-secondary5) border border-(--c-secondary10) rounded-lg hover:bg-(--c-secondary10) hover:text-(--c-primary) flex place-content-center" target="_blank" href="https://www.linkedin.com/in/joris-ten-voorde-266678202/">
                  <FaLinkedinIn className="text-2xl my-auto hover:text-(--c-primary)" />
                </a>
              </li>
            </ul>

            <p className="text-(--c-accent-ylw)! font-medium! text-base! bg-(--c-accent10-ylw) max-w-fit rounded-3xl py-1.5 px-5 border border-(--c-accent20-ylw)">FULL-STACK DEVELOPMENT STUDENT</p>

            <div className="flex gap-2 place-items-center">
              <div className="h-10 w-10 bg-(--c-primary10) flex place-content-center items-center rounded-lg text-(--c-primary) text-xl">
                <IoLocationOutline />
              </div>
              <p className="">Copenhagen, Denmark</p>
            </div>
          </div>
        </section>
        <section>
          <Image width={300} height={300} src="/me.png" alt="Greyscaled portrait image of man smiling directly into the camera."></Image>
        </section>
      </section>
    </>
  );
}
