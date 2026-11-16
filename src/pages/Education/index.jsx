import CardCertification from "../../components/CardCertification";
import CartEducation from "../../components/CartEducation";
import SectionHeading from "../../components/SectionHeading";

const Education = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40">
      <SectionHeading
        eyebrow="Academic journey"
        title="Education"
        highlight="Background"
        subtitle="My academic journey, courses, and educational achievements that have shaped my technical expertise."
      />

      <div className="mt-14">
        <CartEducation />
      </div>

      <SectionHeading
        className="mt-28"
        as="h2"
        eyebrow="Achievements"
        title="My"
        highlight="Certifications"
      />

      <div className="mt-12">
        <CardCertification />
      </div>
    </div>
  );
};

export default Education;
