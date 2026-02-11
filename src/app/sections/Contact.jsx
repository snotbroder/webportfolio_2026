"use client";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <section>
      <header>
        <h2>
          Connect <span className="text-(--c-primary)">with me</span>
        </h2>
      </header>
      <div className="flex flex-col gap-6">
        <p className="max-w-120">Please reach out to me if you want to learn more about me! I&apos;m always open to discuss opportunities.</p>
        <ul className="flex flex-col gap-4 my-2 max-w-150">
          <li className="bg-(--c-secondary5) border border-(--c-secondary10) rounded-md p-4 flex gap-6 place-items-center">
            <div className="h-12 w-12 bg-(--c-primary10) flex place-content-center items-center rounded-lg text-(--c-primary) text-2xl">
              <MdOutlineEmail />
            </div>
            <div className="flex flex-col">
              <p className="small">E-mail</p>
              <a className="font-medium" href="mailto:contact@voorde.dk">
                contact@voorde.dk
              </a>
            </div>
          </li>
          <li className="bg-(--c-secondary5) border border-(--c-secondary10) rounded-md p-4 flex gap-6 place-items-center">
            <div className="h-12 w-12 bg-(--c-primary10) flex place-content-center items-center rounded-lg text-(--c-primary) text-2xl">
              <MdPhone />
            </div>
            <div className="flex flex-col">
              <p className="small">Phone number</p>
              <p className="medium">+45 30545925</p>
            </div>
          </li>
          <li className="bg-(--c-secondary5) border border-(--c-secondary10) rounded-md p-4 flex gap-6 place-items-center">
            <div className="h-12 w-12 bg-(--c-primary10) flex place-content-center items-center rounded-lg text-(--c-primary) text-2xl">
              <MdLocationOn />
            </div>
            <div className="flex flex-col">
              <p className="small">Location</p>
              <p className="medium">Vesterbrogade 1620, Copenhagen V</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
