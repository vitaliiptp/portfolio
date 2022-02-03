import React from "react";


interface HamburgerProps{
  active: Boolean
  setActive: Function
}


const Hamburger = ({active, setActive}: HamburgerProps) => {


  const handleClick = (): void => {
    setActive(!active);
  };

  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-erin transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col justify-center items-center p-1 border-2 border-erin rounded group"
      onClick={handleClick}
    >
      <div
        className={`${genericHamburgerLine} ${
            active
            ? "rotate-45 translate-y-2 group-hover:opacity-50"
            : "group-hover:opacity-50"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
            active ? "opacity-0" : "group-hover:opacity-50"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
            active
            ? "-rotate-45 -translate-y-2 group-hover:opacity-50"
            : "group-hover:opacity-50"
        }`}
      />
    </button>
  );
};

export default Hamburger;
