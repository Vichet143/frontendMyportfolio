import TrueFocus from "./Textfocus";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let menu = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "EDUCATION",
      link: "/education",
    },
    {
      name: "PROJECTS",
      link: "/projects",
    },
    {
      name: "RESUME",
      link: "/resume",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change after 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-navbar text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:px-6 xl:px-8">
        <a href="https://flowbite.com/" class="flex items-center space-x-3">
          <span class="self-center text-lg sm:text-xl font-semibold whitespace-nowrap text-white">
            <TrueFocus sentence="VICHET CHOUB" />
          </span>
        </a>
        <div className="hidden lg:block" id="navbar-default">
          <ul className="font-medium flex flex-col gap-3 p-4 mt-4 rounded-3xl bg-slate-950/80 border border-white/10 md:flex-row lg:space-x-2 xl:space-x-4 md:p-2 md:mt-0 md:border-0 md:bg-transparent">
            {menu.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-green-400 bg-green-400/10 text-green-300 shadow-[0_10px_30px_rgba(34,197,94,0.22)]"
                        : "border-transparent text-white hover:border-green-400/40 hover:bg-white/10 hover:text-green-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden ${
            isOpen
              ? "border-green-400 bg-green-500/10 shadow-lg shadow-green-500/30"
              : "border-white/10 bg-white/5 backdrop-blur-md hover:border-green-400/40 hover:bg-white/10"
          }`}
        >
          <span className="sr-only">Toggle Menu</span>

          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 sm:mx-6 mb-4 rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl shadow-2xl">
          <ul className="space-y-2">
            {menu.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-green-500/15 text-green-300 border border-green-400"
                        : "text-white hover:bg-white/10 hover:text-green-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
