import { useEffect, useState } from "react";
import UserService from "../service/UserService";
import MoveToTop from "./MoveToTop";
import FilterTabs from "./FilterTabs";
import { SkeletonCard } from "./Skeleton";

const options = [
  { key: "all", label: "All" },
  { key: "course", label: "Courses" },
  { key: "job", label: "Jobs" },
];

const CardCertification = () => {
  const [certification, setCertification] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await UserService.getDataCertification();
        setCertification(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  const [filter, setFilter] = useState("all");

  const list = Array.isArray(certification) ? certification : [];
  const filteredData =
    filter === "all"
      ? list
      : list.filter((item) => item.type_certification === filter);

  return (
    <div>
      <div className="flex justify-center mb-12">
        <FilterTabs options={options} value={filter} onChange={setFilter} />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {loading ? (
          Array.from({ length: 3 }, (_, i) => (
            <SkeletonCard
              key={i}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            />
          ))
        ) : filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="card-glow group flex flex-col p-5 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="mb-5 h-48 overflow-hidden rounded-xl border border-white/10 bg-slate-900/90">
                <img
                  src={item.certificate_url}
                  alt={item.certificate_name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-white leading-snug">
                {item.certificate_name}
              </h3>
              <p className="mt-2 text-sm text-green-400">{item.organization}</p>
              <p className="mt-1 text-sm text-gray-400">
                Issued: {item.issue_date}
              </p>
              <a
                href={item.certificate_url}
                target="_blank"
                rel="noreferrer"
                className="btn-outline px-4! py-2! mt-6 self-start"
              >
                View Certificate
              </a>
            </div>
          ))
        ) : (
          <div className="w-full text-center py-10">
            <h3 className="text-xl font-semibold text-gray-400">
              No certifications found.
            </h3>
            <p className="text-gray-500 mt-2">
              There are no {filter === "all" ? "" : filter} certifications
              available.
            </p>
          </div>
        )}
      </div>
      <MoveToTop />
    </div>
  );
};

export default CardCertification;
