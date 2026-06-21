import { useEffect, useState } from "react";
import UserService from "../service/UserService";
import MoveToTop from "./MoveToTop";

const CardCertification = () => {
  const [certification, setCertification] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await UserService.getDataCertification();
        console.log(data);
        setCertification(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? certification
      : certification.filter((item) => item.type_certification === filter);

  return (
    <div className="mt-10">
      <div className="container">
        <div className="flex justify-center mb-20">
          <div className="mb-6 flex flex-wrap w-70 items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
            {[
              { key: "all", label: "All" },
              { key: "course", label: "Courses" },
              { key: "job", label: "Jobs" },
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

        <div className="gap-6 flex flex-3 justify-center">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                className="overflow-hidden w-90 rounded-3xl border border-green-400/20 bg-slate-950/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-green-400/40"
                key={index}
              >
                <div className="mb-5 h-50 overflow-hidden rounded-3xl bg-slate-900/90">
                  <img
                    src={item.certificate_url}
                    alt={item.certificate_name}
                    className="w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
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
            <div className="col-span-3 text-center py-10">
              <h2 className="text-xl font-semibold text-gray-400">
                No certifications found.
              </h2>
              <p className="text-gray-500 mt-2">
                There are no {filter === "all" ? "" : filter} certifications
                available.
              </p>
            </div>
          )}
        </div>
        <MoveToTop/>
      </div>
    </div>
  );
};

export default CardCertification;
