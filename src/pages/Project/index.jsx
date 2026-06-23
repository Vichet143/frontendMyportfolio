import CartProject from "../../components/CartProject";
import MoveToTop from "../../components/MoveToTop";
import { useState } from "react";

const Project = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="my-40">
      <div className="container">
        <h1 className="text-center font-bold text-2xl sm:text-3xl tracking-wide sm:tracking-[0.3rem] uppercase">
          My Projects
        </h1>
        <div className="flex justify-center mt-5 mb-20">
          <p className="text-center w-225 text-gray-400 tracking-[0.1rem]">
            Explore a collection of my recent work across various technologies
            and domains.
          </p>
        </div>
        <div className="flex justify-center mb-20">
          <div className="mb-6 flex flex-wrap px-5 items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
            {[
              { key: "all", label: "All" },
              { key: "website", label: "Website" },
              { key: "mobile", label: "Mobile" },
            ].map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setFilter(option.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400/40 ${
                  filter === option.key
                    ? "bg-green-400 text-slate-950 shadow-[0_12px_30px_rgba(34,197,94,0.24)]"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <CartProject filter={filter} />
        <MoveToTop />
      </div>
    </div>
  );
};

export default Project;
