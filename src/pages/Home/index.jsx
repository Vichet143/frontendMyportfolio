import LightRays from "../../components/LightRays";
import Cart from "../../components/Cart";
import UserService from "../../service/UserService";
import { useEffect, useState } from "react";
import CartAboutMe from "../../components/CartAboutMe";
import CartProject from "../../components/CartProject";
import MoveToTop from "../../components/MoveToTop";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await UserService.getDataUser();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="pb-10 container">
      <LightRays />
      <div className="mt-40">
        <Cart />
      </div>
      <div className="flex justify-center">
        <div className="px-3 py-2 w-30 rounded border border-green-400 text-center mt-40">
          <h1 className="text-white text-[15px]">ABOUT ME</h1>
        </div>
      </div>
      <h1 className="text-white text-center text-4xl font-bold py-6">
        WHO <span className="text-green-400">AM</span> I
      </h1>
      <div className="max-w-4xl mx-auto my-10">
        <p className="text-gray-400 text-lg text-center whitespace-normal break-words">
          I am a 4th-year Information Technology Engineering student
          specializing in full-stack development. I can work with both frontend
          and backend technologies to build modern, responsive, and efficient
          web applications.
        </p>
      </div>
      <CartAboutMe />
      <div className="flex justify-center mt-20 mb-40">
        <a
          class="group inline-flex items-center gap-4 rounded-full border border-slate-300 bg-gray-200 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-gray-300 hover:text-slate-900 focus-visible:ring-4 focus-visible:ring-slate-200 focus-visible:outline-none"
          href="#"
        >
          <span>MORE ABOUT ME</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 text-green-400 transition-transform group-hover:translate-x-0.5 group-hover:text-green-400 rtl:rotate-180"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </a>
      </div>

      <h1 className="text-center text-3xl font-bold mt-30">
        Featured{" "}
        <span className=" px-5 py-2 rounded border border-green-400 ml-2">
          Projects
        </span>
      </h1>
      <p className="text-center mt-9 mb-20 text-gray-400">
        A selection of my recent web development and programming projects.
      </p>
      <CartProject />
      <div className="flex justify-center my-10">
        <a
          class="group inline-flex items-center gap-4 rounded-full border border-slate-300 bg-gray-200 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-gray-300 hover:text-slate-900 focus-visible:ring-4 focus-visible:ring-slate-200 focus-visible:outline-none"
          href="#"
        >
          <span>VIEW MORE PROJECTS</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 text-green-400 transition-transform group-hover:translate-x-0.5 group-hover:text-green-400 rtl:rotate-180"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </a>
      </div>

      <div className="my-20 flex justify-center bg-black items-center rounded h-150 mt-50 flex-col">
        <h1 className="text-4xl uppercase font-bold text-center w-200 leading-18 text-gray-100 tracking-[0.5rem]">
          {" "}
          <span className="px-3 py1 bg-green-400 rounded text-black">
            Thank you
          </span>{" "}
          for visiting and I hope to connect soon for a future{" "}
          <span className="px-3 py1 border border-green-400 rounded">
            collaboration
          </span>
        </h1>
        <p className="text-center w-120 my-10 text-gray-400">
          I'm currently available for freelance work and internship
          opportunities.
        </p>
        <div className="flex justify-center mt-5">
          <a
            class="group inline-flex items-center gap-4 rounded-full border border-slate-300 bg-gray-200 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-gray-300 hover:text-slate-900 focus-visible:ring-4 focus-visible:ring-slate-200 focus-visible:outline-none"
            href="#"
          >
            <span>GET IN TOUCH</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 text-green-400 transition-transform group-hover:translate-x-0.5 group-hover:text-green-400 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <MoveToTop />
    </div>
  );
};

export default Home;
