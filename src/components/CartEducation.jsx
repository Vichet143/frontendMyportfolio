import { useEffect, useState } from "react";
import { PiStudentDuotone } from "react-icons/pi";
import UserService from "../service/UserService";
import { SkeletonCard } from "./Skeleton";

const CartEducation = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataEducation();
        setEducation(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[]);

  const list = Array.isArray(education) ? education : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {loading &&
        Array.from({ length: 2 }, (_, i) => <SkeletonCard key={i} />)}
      {list.map((item, index) => (
        <div key={index} className="card-glow flex flex-col p-7 sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="icon-tile mx-0! size-14! shrink-0 text-green-400">
              <PiStudentDuotone className="size-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-snug">
                {item.degree}
              </h3>
              <p className="text-sm text-green-400/90 mt-1">
                Degree in {item.field_of_study}
              </p>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-white">
            {item.school_name}
          </h4>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Duration
              </p>
              <p className="font-medium text-white mt-1">
                {item.start_date} - {item.end_date}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Location
              </p>
              <a
                href={item.google_map}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white mt-1 inline-block hover:text-green-300 transition-colors"
              >
                {item.address}
              </a>
            </div>
          </div>

          <p className="mt-5 text-gray-400 leading-7 text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartEducation;
