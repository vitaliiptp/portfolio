import React, { useState } from "react";
import Image from "next/image";
// import Canvas from "./Canvas";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      {/*<Canvas timeout="75"/>*/}
      {/*<Image src="/assets/logo.png" alt="Logo" width={72} height={72} />*/}
      <nav className="flex items-center justify-end flex-wrap bg-black p-3">
        <div className="px-3 pb-5 sm:hidden">
          <Hamburger active={active} setActive={setActive} />
        </div>
        <div
          className={`${
            active ? "l" : "hidden"
          }   w-full sm:inline-flex sm:flex-grow sm:w-auto`}
        >
            <div className="flex flex-col items-end w-full sm:inline-flex sm:flex-row sm:mx-auto sm:w-auto sm:h-auto sm:items-center">
              <Link href="/">
                <a className="text-right w-full px-3 py-2 text-b-26 sm:inline-flex sm:w-auto hover:opacity-50">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="text-right w-full px-3 py-2 text-b-26 sm:inline-flex sm:w-auto hover:opacity-50">
                  Projects
                </a>
              </Link>
              <Link href="/">
                <a className="text-right w-full px-3 py-2 text-b-26 sm:inline-flex sm:w-auto hover:opacity-50">
                  Tech Stack
                </a>
              </Link>
              <Link href="/">
                <a className="text-right w-full px-3 py-2 text-b-26 sm:inline-flex sm:w-auto hover:opacity-50">
                  Resume
                </a>
              </Link>
              <Link href="/">
                <a className="text-right w-full px-3 py-2 text-b-26 sm:inline-flex sm:w-auto hover:opacity-50">
                  Contact
                </a>
              </Link>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
