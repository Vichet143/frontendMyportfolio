import { useState, useEffect } from "react";
import UserService from "../service/UserService";
import { SkeletonCard } from "./Skeleton";
import iconprojectweb from "../assets/image/iconproject.png";
import iconprojectbackend from "../assets/image/iconprojectbackend.png";
import iconprojectmobile from "../assets/image/iconprojectmobile.png";

const CartProject = ({ filter = "all" }) => {
  const [projectData, setProjectdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataProject();
        setProjectdata(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter(
          (item) => item.project_type?.toLowerCase() === filter,
        );

  const isHome = location.pathname === "/";
  const displayedProjects = isHome
    ? filteredProjects.slice(0, 3)
    : filteredProjects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4 px-4">
      {loading ? (
        Array.from({ length: 3 }, (_, i) => <SkeletonCard key={i} />)
      ) : displayedProjects.length > 0 ? (
        displayedProjects.map((item, index) => (
          <div
            key={index}
            className="card-glow group flex flex-col p-5"
          >
            {/* Project Type */}
            <div className="absolute top-8 left-8 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-green-400/50">
              <img
                className={`brightness-0 invert ${item.project_type === "Mobile" ? "w-3" : "w-5"}`}
                src={
                  item.project_type === "Website"
                    ? iconprojectweb
                    : item.project_type === "Backend"
                      ? iconprojectbackend
                      : item.project_type === "Mobile"
                        ? iconprojectmobile
                        : ""
                }
                alt={item.project_type}
              />
              <p className="text-xs text-white">{item.project_type}</p>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={item.image_url}
                alt={item.title}
                loading="lazy"
                className="w-full h-52 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="mt-5 mb-2 text-xl font-semibold text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mb-5 text-gray-400 text-sm leading-6 line-clamp-5">
              {item.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 text-xs mb-6 mt-auto">
              {item.project_skill?.map((skill, index2) => (
                <span
                  key={index2}
                  className="bg-green-400/10 border border-green-400/40 px-3 py-1 rounded-full text-green-300 font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center pt-4 border-t border-white/10">
              <a
                href={item.github_uril_frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-4! py-2! w-full sm:w-auto"
              >
                <span className="text-[11px]">FRONTEND CODE</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 text-green-400 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
              {item.github_uril_backend !== " " && (
                <a
                  href={item.github_uril_backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-4! py-2! w-full sm:w-auto"
                >
                  <span className="text-[11px]">BACKEND CODE</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-green-400 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              )}

              {/* <div className="text-[13px] text-gray-400 text-right">
              <p>{item.start_date}</p>
              <p>{item.end_date}</p>
            </div> */}
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-3 text-center py-10">
          <h2 className="text-xl font-semibold text-gray-400">
            No projects found.
          </h2>
          <p className="text-gray-500 mt-2">
            There are no {filter === "all" ? "" : filter} projects available.
          </p>
        </div>
      )}
    </div>
  );
};

export default CartProject;
