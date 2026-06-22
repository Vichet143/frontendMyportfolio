import CardCertification from "../../components/CardCertification";
import CartEducation from "../../components/CartEducation";

const Education = () => {
  return (
    <div>
      <div className="container py-50">
        <h1 className="text-center font-bold text-3xl tracking-[0.3rem] uppercase">
          <span className="px-3 py-1 bg-green-400 rounded text-black">Education</span> Background
        </h1>
        <div className="flex justify-center mt-5 text-gray-400">
          <p className="text-center w-225 tracking-[0.1rem]">
            My academic journey, courses, and educational achievements that have
            shaped my technical expertise.
          </p>
        </div>
        <CartEducation/>

        <h1 className="text-center uppercase mt-30 font-bold text-2xl tracking-[0.5rem]">Certifications</h1>
        <CardCertification/>
      </div>
    </div>
  );
};

export default Education;
