import { useState, useEffect } from "react";
import UserService from "../service/UserService";
import iconprojectweb from "../assets/image/iconproject.png";
import iconprojectbackend from "../assets/image/iconprojectbackend.png";
import iconprojectmobile from "../assets/image/iconprojectmobile.png";

const CartProject = ({ filter = "all" }) => {
  const [projectData, setProjectdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataProject();
        console.log(data);
        setProjectdata(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
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

  return (
    <div className="flex flex-3 justify-center my-4 gap-10">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((item, index) => (
          <div
            key={index}
            className="group relative max-w-95 p-6 border border-green-400 rounded-3xl shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Project Type */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded bg-white-opacity ">
              <img
                className={`brightness-0 invert ${item.project_type === "Mobile" ? "w-4" : "w-8"}`}
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
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-50 transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h5 className="mt-6 mb-2 text-2xl font-semibold text-white">
              {item.title}
            </h5>

            {/* Description */}
            <p className="mb-6 text-gray-400 text-[13px] h-40">
              {item.description}
            </p>

            {/* Skills */}
            <div className="h-25">
              <div className="flex flex-wrap gap-2 text-[13px] mb-10 mt-5">
                {item.project_skill.map((skill, index2) => (
                  <p
                    key={index2}
                    className="bg-green-400 px-3 py-1 rounded text-gray-900 font-bold"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <a
                href={item.github_uril_frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-green-400"
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
                  className="inline-flex items-center gap-4 rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-green-400"
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
            No certifications found.
          </h2>
          <p className="text-gray-500 mt-2">
            There are no {filter === "all" ? "" : filter} projects
            available.
          </p>
        </div>
      )}
    </div>
  );
};

export default CartProject;
