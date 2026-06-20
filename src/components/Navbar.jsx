import TrueFocus from "./Textfocus";
import { useEffect, useState } from "react";

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
      className={`transition-colors duration-300 fixed w-full z-20 top-0 inset-s-0 ${
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
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  class="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
