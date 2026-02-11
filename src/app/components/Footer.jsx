"use client";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-t-(--c-secondary10) px-4 pb-8 pt-4 flex flex-col gap-4">
      <ul className="flex gap-4">
        <li>
          <a className="w-12 h-12 bg-(--c-secondary5) border border-(--c-secondary10) rounded-sm hover:bg-(--c-secondary10) hover:text-(--c-primary) flex place-content-center" target="_blank" href="https://github.com/snotbroder">
            <IoLogoGithub className="text-2xl my-auto hover:text-(--c-primary)" />
          </a>
        </li>
        <li>
          <a className="w-12 h-12 bg-(--c-secondary5) border border-(--c-secondary10) rounded-sm hover:bg-(--c-secondary10) hover:text-(--c-primary) flex place-content-center" target="_blank" href="https://www.linkedin.com/in/joris-ten-voorde-266678202/">
            <FaLinkedinIn className="text-2xl my-auto hover:text-(--c-primary)" />
          </a>
        </li>
      </ul>
      <ul className="flex gap-2 justify-between">
        <li>
          <p className="small">&copy; {new Date().getFullYear()} voorde.dk</p>
        </li>
        <li>
          <p className="small">
            Developed with{" "}
            <a target="_blank" className="small" href="https://nextjs.org/">
              Next.js
            </a>
            {""} and {""}
            <a target="_blank" className="small" href="https://www.su.dk/om-su">
              SU
            </a>
          </p>
        </li>
      </ul>
    </footer>
  );
}
