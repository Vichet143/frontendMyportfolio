import CardCertification from "../../components/CardCertification";
import CartEducation from "../../components/CartEducation";

const Education = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-30 sm:py-30 lg:py-50">
        <h1 className="text-center font-bold text-2xl sm:text-3xl tracking-wide sm:tracking-[0.3rem] uppercase">
          <span className="px-3 py-1 bg-green-400 rounded text-black">
            Education
          </span>{" "}
          Background
        </h1>
        <div className="flex justify-center mt-5 text-gray-400">
          <p className="text-center w-full max-w-3xl tracking-wide px-2">
            My academic journey, courses, and educational achievements that have
            shaped my technical expertise.
          </p>
        </div>
        <div className="mt-10">
          <CartEducation />
        </div>

        <h1 className="text-center uppercase mt-20 sm:mt-30 font-bold text-xl sm:text-2xl tracking-wide sm:tracking-[0.5rem]">
          Certifications
        </h1>
        <div className="mt-10 flex justify-center">
          <CardCertification />
        </div>
      </div>
    </div>
  );
};

export default Education;
