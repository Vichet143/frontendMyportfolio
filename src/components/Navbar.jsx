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
      className={`transition-colors duration-300 fixed w-full z-50 top-0 inset-s-0 ${
        scrolled ? "bg-navbar text-white" : "bg-transparent text-white"
      }`}
    >
      <div class="container flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="self-center text-xl text-white font-semibold whitespace-nowrap">
            <TrueFocus sentence="VICHET CHOUB" />
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col gap-3 p-4 mt-4 rounded-3xl bg-slate-950/80 border border-white/10 md:flex-row md:space-x-4 md:p-2 md:mt-0 md:border-0 md:bg-transparent">
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
      </div>
    </nav>
  );
};

export default Navbar;
