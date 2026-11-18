import { useEffect, useState } from "react";
import MoveToTop from "../../components/MoveToTop";
import UserService from "../../service/UserService";
import { FaDownload } from "react-icons/fa6";
import { SkeletonGrid } from "../../components/Skeleton";
import SectionHeading from "../../components/SectionHeading";
import FilterTabs from "../../components/FilterTabs";
import CartProject from "../../components/CartProject";
import resumePdf from "../../assets/Choub_Vichet_Full_Stack_Development.pdf";

const tabs = [
  { key: "skills", label: "Skills" },
  { key: "education", label: "Education" },
  { key: "experience", label: "Experience" },
  { key: "projects", label: "Projects" },
  { key: "certifications", label: "Certifications" },
];

const toList = (data) => (Array.isArray(data) ? data : []);

// Skills that should always show in a category, even if the API data does not
// list them yet (matched against the category name, case-insensitive).
const EXTRA_SKILLS = [{ category: /frontend/i, skills: ["Flutter"] }];

const getSkillNames = (item) => {
  const names = String(item.skill_name ?? "")
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);

  EXTRA_SKILLS.forEach(({ category, skills }) => {
    if (!category.test(item.categories ?? "")) return;
    skills.forEach((extra) => {
      const exists = names.some((n) => n.toLowerCase() === extra.toLowerCase());
      if (!exists) names.push(extra);
    });
  });

  return names;
};

const EmptyState = ({ title, text }) => (
  <div className="col-span-full rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
    <p className="text-lg font-semibold text-white">{title}</p>
    <p className="mt-2 text-sm text-gray-400">{text}</p>
  </div>
);

const Resume = () => {
  const [filter, setFilter] = useState("skills");

  const [skill, Setskill] = useState([]);
  const [softskill, Setsoftskill] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);

  const [loading, setLoading] = useState(true);

  // Load all resume data in parallel; one failing request does not block the rest.
  useEffect(() => {
    const fetchData = async () => {
      const [skills, soft, edu, certs] = await Promise.allSettled([
        UserService.getDataUserSkill(),
        UserService.getDataSoftSkill(),
        UserService.getDataEducation(),
        UserService.getDataCertification(),
      ]);

      if (skills.status === "fulfilled") Setskill(skills.value);
      if (soft.status === "fulfilled") Setsoftskill(soft.value);
      if (edu.status === "fulfilled") setEducation(edu.value);
      if (certs.status === "fulfilled") setCertifications(certs.value);

      [skills, soft, edu, certs].forEach((result) => {
        if (result.status === "rejected") console.error(result.reason);
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (loading && (filter === "skills" || filter === "education" || filter === "certifications")) {
      return <SkeletonGrid count={filter === "skills" ? 4 : 3} />;
    }

    //skills
    if (filter === "skills") {
      const skills = toList(skill);
      const soft = toList(softskill);
      return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((item, index) => (
              <div
                key={index}
                className="card-glow p-6 md:last:odd:col-span-2"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.categories}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {getSkillNames(item).map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-green-400/40 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <SectionHeading
            as="h2"
            className="mt-24"
            eyebrow="Beyond the code"
            title="Soft"
            highlight="Skills"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {soft.map((item, index) => (
              <div key={index} className="card-glow p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    //education
    if (filter === "education") {
      const list = toList(education);
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {list.length > 0 ? (
            list.map((item, index) => (
              <div key={index} className="card-glow flex flex-col p-7 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-2xl">
                    🎓
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
                    <p className="font-medium text-white mt-1">
                      {item.address}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <EmptyState
              title="No education data found."
              text="Please check back later or switch to another tab."
            />
          )}
        </div>
      );
    }

    //project
    if (filter === "projects") {
      return <CartProject />;
    }

    //certification
    if (filter === "certifications") {
      const list = toList(certifications);
      return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.length > 0 ? (
            list.map((item, index) => (
              <div key={index} className="card-glow flex flex-col p-6">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {item.certificate_name}
                </h3>
                <p className="mt-2 text-sm text-green-400">
                  {item.organization}
                </p>
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
            <EmptyState
              title="No certifications found."
              text="Please try another filter or check back later."
            />
          )}
        </div>
      );
    }

    if (filter === "experience") {
      return (
        <EmptyState
          title="Experience section coming soon."
          text="I am preparing my professional experience details for the next update."
        />
      );
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40">
      <SectionHeading
        eyebrow="Resume"
        title="Professional"
        highlight="Experience"
        subtitle="I am an IT Engineer specializing in Frontend and Backend. My goal is to leverage these technologies to create innovative solutions for real-world problems."
      />

      <div className="flex justify-center mt-10">
        <a
          href={resumePdf}
          download="Choub_Vichet_Full_Stack_Development.pdf"
          className="btn-green"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>

      <div className="flex justify-center mt-14 mb-12">
        <FilterTabs options={tabs} value={filter} onChange={setFilter} />
      </div>

      {renderContent()}

      <MoveToTop />
    </div>
  );
};

export default Resume;
