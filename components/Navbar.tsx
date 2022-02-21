import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white">
      <nav className="flex flex-col items-end py-3 sm:items-center text-b sm:pr-0">
        <div className="py-3 sm:hidden">
          <Hamburger active={active} setActive={setActive} />
        </div>
        <div className="w-full sm:w-auto">
          <div
            className={`${
              active ? "" : "hidden"
            } flex flex-col items-end w-full border-b-2 sm:flex-row sm:inline-flex sm:justify-center sm:items-center sm:pt-3`}
          >
            <Link href="/">
              <a className="pt-3 opacity-80 sm:py-0 sm:px-7 sm:py-2 hover:opacity-100 focus:border-b-4 focus:opacity-100"
              onClick={() => setActive(!active)}>
                HOME
              </a>
            </Link>
            <Link href="/projects">
              <a className="pt-3 opacity-80 sm:py-0 sm:px-7 sm:py-2 hover:opacity-100 focus:border-b-4 focus:opacity-100"
                 onClick={() => setActive(!active)}>
                PROJECTS
              </a>
            </Link>
            <Link href="/technologies">
              <a className="pt-3 opacity-80 sm:py-0 sm:px-7 sm:py-2 hover:opacity-100 focus:border-b-4 focus:opacity-100"
                 onClick={() => setActive(!active)}>
                TECH STACK
              </a>
            </Link>
            <Link href="/contact">
              <a className="pt-3 opacity-80 sm:py-0 sm:px-7 sm:py-2 hover:opacity-100 focus:border-b-4 focus:opacity-100"
                 onClick={() => setActive(!active)}>
                CONTACT
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
