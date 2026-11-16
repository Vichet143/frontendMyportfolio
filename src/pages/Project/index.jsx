import CartProject from "../../components/CartProject";
import MoveToTop from "../../components/MoveToTop";
import SectionHeading from "../../components/SectionHeading";
import FilterTabs from "../../components/FilterTabs";
import { useState } from "react";

const options = [
  { key: "all", label: "All" },
  { key: "website", label: "Website" },
  { key: "mobile", label: "Mobile" },
];

const Project = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40">
      <SectionHeading
        eyebrow="Portfolio"
        title="My"
        highlight="Projects"
        subtitle="Explore a collection of my recent work across various technologies and domains."
      />

      <div className="flex justify-center my-12">
        <FilterTabs options={options} value={filter} onChange={setFilter} />
      </div>

      <CartProject filter={filter} />
      <MoveToTop />
    </div>
  );
};

export default Project;
