import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white z-10">
      <nav className="flex flex-col items-end py-3 md:items-center text-b tracking-widest uppercase md:pr-0">
        <div className="py-3 md:hidden">
          <Hamburger active={active} setActive={setActive} />
        </div>
        <div className="w-full md:w-auto">
          <div
            className={`${
              active ? "" : "hidden"
            } flex flex-col items-end w-full border-b-2 md:flex-row md:inline-flex md:justify-center md:items-center md:pt-3`}
          >
            <Link href="/">
              <a
                className="pt-3 md:py-0 md:px-7 md:py-2 hover:text-blue focus:text-blue-active"
                onClick={() => setActive(!active)}
              >
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a
                className="pt-3 md:py-0 md:px-7 md:py-2 hover:text-blue focus:text-blue-active"
                onClick={() => setActive(!active)}
              >
                Projects
              </a>
            </Link>
            <Link href="/technologies">
              <a
                className="pt-3 md:py-0 md:px-7 md:py-2 hover:text-blue focus:text-blue-active"
                onClick={() => setActive(!active)}
              >
                Tech Stack
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="pt-3 md:py-0 md:px-7 md:py-2 hover:text-blue focus:text-blue-active"
                onClick={() => setActive(!active)}
              >
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
