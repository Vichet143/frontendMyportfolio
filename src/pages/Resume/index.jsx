import { useEffect, useState } from "react";
import MoveToTop from "../../components/MoveToTop";
import UserService from "../../service/UserService";
import { FaDownload } from "react-icons/fa6";

const Resume = () => {
  const [filter, setFilter] = useState("skills");

  const [skill, Setskill] = useState([]);
  const [softskill, Setsoftskill] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [project, setProject] = useState([]);

  //   getdatauserskill
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataUserSkill();
        Setskill(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //   getDataSoftSkill
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataSoftSkill();
        Setsoftskill(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //education get data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataEducation();
        setEducation(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //get data certification
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataCertification();
        setCertifications(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //get data project
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataProject();
        setProject(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    //skills
    if (filter === "skills") {
      return (
        <>
          <div className="bg-black p-10 rounded-2xl">
            {skill.map((item, index) => (
              <div key={index} className="flex tracking-[0.1rem] my-3 gap-2">
                <h1>{item.categories}:</h1>
                <p>{item.skill_name}</p>
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-bold mt-20 text-center tracking-[0.1rem]">
            Soft Skills
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {softskill.map((item, index) => (
              <div
                key={index}
                className="w-full transition-transform duration-300 hover:-translate-y-3"
              >
                <div className="h-full rounded-2xl border border-green-400 p-5 bg-slate-950/80">
                  <h1 className="mb-3 text-lg font-semibold">{item.title}</h1>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }

    //education
    if (filter === "education") {
      return (
        <div className="mt-10 grid gap-6">
          {education.length > 0 ? (
            education.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-green-400/30 bg-slate-950/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10 text-green-400 text-2xl">
                    🎓
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      {item.degree}
                    </h1>
                    <p className="text-sm text-gray-400">
                      Degree in {item.field_of_study}
                    </p>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-white mt-4">
                  {item.school_name}
                </h2>
                <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-300">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Duration
                    </p>
                    <p className="font-medium mt-1">
                      {item.start_date} - {item.end_date}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Location
                    </p>
                    <p className="font-medium mt-1">{item.address}</p>
                  </div>
                </div>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-10 text-center text-gray-300">
              <p className="text-lg font-semibold">No education data found.</p>
              <p className="mt-2 text-sm text-gray-400">
                Please check back later or switch to another tab.
              </p>
            </div>
          )}
        </div>
      );
    }

    //project
    if (filter === "projects") {
      return (
        <div className="mt-10 grid gap-8 xl:grid-cols-1">
          {project.length > 0 ? (
            project.map((item, index) => {
              const tags = item.project_skill || item.tags || [];

              return (
                <div
                  key={index}
                  className="group overflow-hidden transition-transform duration-300 hover:-translate-y-3 rounded-[2rem] border border-slate-700/50 bg-slate-950/50 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.18)] "
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-[75%]">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                        {item.project_type || "Project"}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold leading-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                    {item.project_type && (
                      <span className="rounded-full border border-slate-600 bg-slate-900/80 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-slate-300">
                        {item.project_type}
                      </span>
                    )}
                  </div>

                  <p className="mt-6 text-base leading-8 text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {Array.isArray(tags) &&
                      tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full border border-slate-600 bg-slate-900/60 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-slate-300 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  {(item.github_uril_frontend || item.github_uril_backend) && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {item.github_uril_frontend && (
                        <a
                          href={item.github_uril_frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-slate-300 transition hover:border-slate-400 hover:bg-slate-800"
                        >
                          Frontend Code
                        </a>
                      )}

                      {item.github_uril_backend?.trim() && (
                        <a
                          href={item.github_uril_backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-slate-300 transition hover:border-slate-400 hover:bg-slate-800"
                        >
                          Backend Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10">
              <h2 className="text-xl font-semibold text-gray-400">
                No projects found.
              </h2>
              <p className="text-gray-500 mt-2">
                Projects will appear here once you add them.
              </p>
            </div>
          )}
        </div>
      );
    }

    //certification
    if (filter === "certifications") {
      return (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.length > 0 ? (
            certifications.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-3 border border-green-400/20 bg-slate-950/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <h2 className="text-xl font-semibold tracking-tight text-white">
                  {item.certificate_name}
                </h2>
                <p className="mt-2 text-sm text-green-400">
                  {item.organization}
                </p>
                <p className="mt-3 text-sm text-gray-400">
                  Issued: {item.issue_date}
                </p>
                <a
                  href={item.certificate_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300 transition hover:bg-green-400/20 hover:text-white"
                >
                  View Certificate
                </a>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-10 text-center text-gray-300">
              <p className="text-lg font-semibold">No certifications found.</p>
              <p className="mt-2 text-sm text-gray-400">
                Please try another filter or check back later.
              </p>
            </div>
          )}
        </div>
      );
    }

    if (filter == "experience") {
      return (
        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-950/80 p-10 text-center text-gray-300">
          <h1 className="text-2xl font-semibold text-white">
            Experience section coming soon.
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            I’m preparing my professional experience details for the next
            update.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="my-50">
      <div className="container">
        <h1 className="text-3xl text-center tracking-[0.5rem] font-bold uppercase">
          Professional Experience
        </h1>
        <div className="flex justify-center mt-5">
          <p className="text-center text-gray-400 w-200 tracking-[0.1rem]">
            I'm IT Engineer specializing in Frontend and Backend. My goal is to
            leverage these technologies to create innovative solutions for
            real-world problems.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center rounded-full bg-green-400 px-8 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-green-300"
          >
            <div className="flex gap-5 items-center">
              <FaDownload />
              Download Resume
            </div>
          </a>
        </div>
        <div className="flex justify-center my-20">
          <div className="mb-6 flex flex-wrap px-5 items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
            {[
              { key: "skills", label: "Skills" },
              { key: "education", label: "Education" },
              { key: "experience", label: "Experience" },
              { key: "projects", label: "Projects" },
              { key: "certifications", label: "Certifications" },
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
        {renderContent()}

        <MoveToTop />
      </div>
    </div>
  );
};

export default Resume;
