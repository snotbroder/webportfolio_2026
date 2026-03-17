"use client";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 place-items-center md:place-items-stretch md:grid-cols-2 overflow-hidden lg:overflow-visible">
        <section className="flex flex-col place-content-center gap-8 lg:gap-16">
          <div className="flex-col">
            <h1 className="flex gap-2 items-end md:items-start flex-wrap md:flex-col md:gap-2">
              <span className="sub-hero mb-4 md:mb-0">Hi I&apos;m</span>
              <span>Joris</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-6 place-items-center xl:flex-col xl:place-items-start">
              <p className="text-(--c-accent-ylw)! font-medium! small bg-(--c-accent10-ylw) w-fit h-fit py-1 px-3 text-center rounded-3xl  border border-(--c-accent20-ylw)">FULL-STACK DEVELOPMENT STUDENT</p>
            </div>

            <address className="flex gap-2 place-items-center not-italic">
              <div className="h-10 w-10 bg-(--c-primary10) flex place-content-center items-center rounded-lg text-(--c-primary) text-xl">
                <IoLocationOutline />
              </div>
              <p className="">Copenhagen, Denmark</p>
            </address>
          </div>
        </section>
        <section className="relative top-0">
          <div className="flex place-items-center gap-2 py-0 px-4 w-fit absolute top-0 right-0 bg-(--c-secondary5) border border-(--c-secondary10) rounded-2xl">
            <p className="small relative">Looking for internship</p>
            <div className="w-1.5 h-1.5 bg-(--c-primary) rounded-4xl"></div>
          </div>
          <div className="bg-hue-accent absolute -top-30 -right-20 w-100 h-100 z-0 overflow-hidden"></div>
          <div className="bg-hue absolute top-20 left--30 w-130 h-130 z-0 overflow-hidden"></div>
          <Image className="border-b-(--c-secondary10) border z-10 relative" width={620} height={620} src="/me.png" alt="Greyscaled portrait image of man smiling directly into the camera."></Image>
          <ul className="absolute bottom-2 right-2 flex gap-4">
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
        </section>
      </section>
    </>
  );
}
