import LightRays from "../../components/LightRays";
import Cart from "../../components/Cart";
import CartAboutMe from "../../components/CartAboutMe";
import CartProject from "../../components/CartProject";
import MoveToTop from "../../components/MoveToTop";
import { Link } from "react-router-dom";
import { useMetaPixel } from "@adkit/meta-pixel-react";
import { useNavigate } from "react-router-dom";

const ArrowIcon = ({ className = "text-green-500" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    aria-hidden="true"
    className={`size-4 transition-transform group-hover:translate-x-1 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
);

const Home = () => {
  const meta = useMetaPixel();
  const navigate = useNavigate();
  const handleAboutMeClick = (e) => {
    e.preventDefault(); // Stop immediate navigation

    console.log("Tracking About Me...");

    // Fire the event
    meta.trackCustom("trackCustom", "About me clicked");

    // Small delay to ensure Pixel sends the data before page change
    setTimeout(() => {
      navigate("/about");
    }, 100);
  };

  const handleProjectsClick = () => {
    console.log("VIEW MORE PROJECTS clicked");

    meta.trackCustom("trackCustom", "VIEW MORE PROJECTS clicked");
  };

  const handleContactClick = () => {
    console.log("GET IN TOUCH clicked");

    meta.trackCustom("trackCustom", "GET IN TOUCH clicked");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <LightRays />

      {/* CORE VALUES */}
      <section className="mt-10 lg:mt-24">
        <div className="text-center mb-12">
          <span className="eyebrow">What drives me</span>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-5">
            My Core <span className="text-green-400">Values</span>
          </h2>
        </div>
        <Cart />
      </section>

      {/* ABOUT ME */}
      <section className="mt-28 lg:mt-40">
        <div className="text-center">
          <span className="eyebrow">About me</span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-5">
            WHO <span className="text-green-400">AM</span> I
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-8 max-w-3xl mx-auto mt-6 mb-12">
            I am a 4th-year Information Technology Engineering student
            specializing in full-stack development. I can work with both
            frontend and backend technologies to build modern, responsive, and
            efficient web applications.
          </p>
        </div>

        <CartAboutMe />

        <div className="flex justify-center mt-12">
          <button
            type="button"
            className="group btn-light"
            onClick={handleAboutMeClick}
          >
            <span>MORE ABOUT ME</span>
            <ArrowIcon />
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-28 lg:mt-40">
        <div className="text-center mb-12">
          <span className="eyebrow">Portfolio</span>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-5">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4">
            A selection of my recent web development and programming projects.
          </p>
        </div>

        <CartProject />

        <div className="flex justify-center mt-12">
          <Link
            className="group btn-light"
            to="/projects"
            onClick={handleProjectsClick}
          >
            <span>VIEW MORE PROJECTS</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative overflow-hidden my-28 rounded-3xl border border-green-400/30 bg-linear-to-b from-green-400/10 via-black to-black px-6 py-16 sm:py-20 flex flex-col justify-center items-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-green-400/20 blur-3xl"
        />
        <h2 className="relative text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-center max-w-4xl leading-snug sm:leading-relaxed tracking-wide text-gray-100">
          <span className="px-3 py-1 bg-green-400 rounded text-black">
            Thank you
          </span>{" "}
          for visiting and I hope to connect soon for a future{" "}
          <span className="px-3 py-1 border border-green-400 rounded">
            collaboration
          </span>
        </h2>

        <p className="relative max-w-2xl text-center text-gray-400 text-base sm:text-lg mt-8 mb-8">
          I'm currently available for freelance work and internship
          opportunities.
        </p>

        <Link
          className="group btn-green relative"
          to="/contact"
          onClick={handleContactClick}
        >
          <span>GET IN TOUCH</span>
          <ArrowIcon className="text-green-950" />
        </Link>
      </section>

      <MoveToTop />
    </div>
  );
};

export default Home;
