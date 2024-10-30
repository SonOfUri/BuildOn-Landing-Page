"use client";

import { navLinks } from "@/constants";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Open dApp");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="App Logo" className="w-12 h-10" />
        <img src="/white-word.png" alt="Brand Name" className="w-24 h-5" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex items-center gap-10">
        {navLinks.map((nav, index) => (
          <li key={nav.id}>
            <a
              href={nav.id}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium text-[16px] ${
                active === nav.title ? "border-[#DD4F00] text-[#DD4F00] px-5 py-2 border rounded-lg" : ""
              }`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt={toggle ? "Close Menu" : "Open Menu"}
          className="w-7 h-7 object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="p-6 bg-black-gradient absolute top-20 z-50 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="flex flex-col items-start gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    target="_blank"
                    href={nav.id}
                    className={`font-medium text-sm ${
                      active === nav.title ? "border-[#DD4F00] text-[#DD4F00] px-4 py-2 border rounded-lg" : "ml-2"
                    }`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
