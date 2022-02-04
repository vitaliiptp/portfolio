import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="sticky top-0 bg-black">
      <nav className="flex flex-col items-end py-3 sm:items-center text-b-xl">
        <div className="px-3 py-3 sm:hidden">
          <Hamburger active={active} setActive={setActive} />
        </div>
        <div className="w-full sm:w-auto">
          <div
            className={`${
              active ? "" : "hidden"
            } flex flex-col items-end w-full pb-3 border-b-2 sm:flex-row sm:inline-flex sm:justify-center`}
          >
            <Link href="/#home">
              <a className="px-3 pt-3 opacity-80 hover:opacity-100 focus:underline focus:opacity-100">
                Home
              </a>
            </Link>
            <Link href="/#projects">
              <a className="px-3 pt-3 opacity-80 hover:opacity-100 focus:underline focus:opacity-100">
                Projects
              </a>
            </Link>
            <Link href="/#tech-stack">
              <a className="px-3 pt-3 opacity-80 hover:opacity-100 focus:underline focus:opacity-100">
                Tech Stack
              </a>
            </Link>
            <Link href="/#resume">
              <a className="px-3 pt-3 opacity-80 hover:opacity-100 focus:underline focus:opacity-100">
                Resume
              </a>
            </Link>
            <Link href="/#contact">
              <a className="px-3 pt-3 opacity-80 hover:opacity-100 focus:underline focus:opacity-100">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
