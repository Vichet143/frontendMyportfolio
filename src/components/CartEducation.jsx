import { useEffect, useState } from "react";
import { PiStudentDuotone } from "react-icons/pi";
import UserService from "../service/UserService";

const CartEducation = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.getDataEducation();
        console.log(data);
        setEducation(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[]);

  return (
    <div className="mt-20">
      <div className="flex justify-center gap-10">
        {education.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-green-400/30 bg-slate-950/60 p-8 w-110 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-green-400"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10 text-green-400 text-2xl">
                <PiStudentDuotone className="w-14"/>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{item.degree}</h1>
                <p className="text-sm text-gray-400">
                  Degree in {item.field_of_study}
                </p>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-white mt-4">
              {item.school_name}
            </h2>

            <div className="mt-4 flex flex-wrap gap-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Duration
                </p>
                <p className="font-medium text-white mt-1">
                  {item.start_date} - {item.end_date}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Location
                </p>
                <a href={item.google_map}>
                  <p className="font-medium text-white mt-1">{item.address}</p>
                </a>
              </div>
            </div>

            <p className="mt-5 text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartEducation;
