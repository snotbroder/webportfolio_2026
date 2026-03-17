"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Connect", href: "#contact" },
  ];
  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 px-2 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between p-4 rounded-2xl border border-(--c-secondary10) bg-(--backdrop50) backdrop-blur-md">
            {/* Logo */}
            <Link className="max-w-35" href="#top">
              <Image width={400} height={200} src="/logo.svg" alt="Logo"></Image>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 menu-item">
              {navItems.map((item) => (
                <motion.a key={item.label} href={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-sm hover:text-(--c-primary) transition-colors relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            {/* <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 bg-(--c-primary) text-(--c-accent-blk) rounded-lg cursor-pointer cta-primary"
            >
              Contact me
            </motion.a> */}

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-24 left-6 right-6 z-40 p-6 rounded-2xl border border-(--c-secondary10) bg-(--backdrop)/85 backdrop-blur-md md:hidden ">
          <div className="flex flex-col gap-4 menu-item">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-lg selected:text-(--c-primary) transition-colors py-2">
                {item.label}
              </Link>
            ))}
            {/* <Link href="/contact" className="mt-4 px-4 w-full py-3 bg-(--c-primary) text-(--c-accent-blk) rounded-lg cta-primary">
              Contact me
            </Link> */}
          </div>
        </motion.div>
      )}
    </>
  );
}
