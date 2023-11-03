"use client";
import { useState } from "react";

import navLinks from "../constants";
import Link from "next/link";
import Logo from "./Logo";
import ActionBtn from "./ActionBtn";
import Image from "next/image";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenuOpen = () => setMenuIsOpen(!menuIsOpen);
  return (
    // check if header is perfectly fixed...p
    <header className="sticky top-0 shadow-md bg-white w-full h-20 lg:h-14 flex items-center z-10">
      <nav className="align-body relative  flex items-center justify-between">
        <Link href="/">
          <Logo location='header'/>
        </Link>
        {/* ....fix the navlink hover underline color and weight effect..... */}
        <div className="hidden md:block">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.route}
              className="px-2 hover:underline decoration-cyan decoration-3 underline-offset-[15px]  underline-cyan"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <ActionBtn />
        </div>

        {/* .......hamburger........ */}
        <div onClick={handleMenuOpen} className="relative w-6 h-5 md:hidden">
          <Image
            fill
            src={menuIsOpen ? "/close-menu.svg" : "/open-menu.svg"}
            alt="mobile-menu-toggler"
          />
        </div>

        {/* .....mobile menu .......... */}
        <div
          onClick={handleMenuOpen}
          className={
            menuIsOpen
              ? "absolute rounded bg-white shadow-md top-16 left-0 w-full grid place-items-center transition-all ease-in-out duration-900 delay-100  "
              : "hidden"
          }
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.route}
              className="py-2 text-prim my-1 font-semibold tracking-wider text-dark-blue"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
