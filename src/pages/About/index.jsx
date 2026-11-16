import { useEffect, useState } from "react";
import UserService from "../../service/UserService";
import MoveToTop from "../../components/MoveToTop";
import email from "../../assets/image/email.png";
import telegram from "../../assets/image/telegram.png";
import linkedin from "../../assets/image/linkedin.png";
import github from "../../assets/image/gtihub.png";
import CartMoreAboutMe from "../../components/CartMoreAboutMe";
import UsageLogoLoop from "../../components/UsageLogoLoop";

const About = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await UserService.getDataUser();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const iconconnect = [
    {
      icon: github,
      link: user.map((item) => item.github_url),
    },
    {
      icon: telegram,
      link: user.map((item) => item.telegram_url),
    },
    {
      icon: linkedin,
      link: user.map((item) => item.linkedin_url),
    },
    {
      icon: email,
      link: user.map(
        (item) => `https://mail.google.com/mail/?view=cm&to=${item.email}`,
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-32 pb-20 sm:pt-40">
        <div className="text-center">
          <span className="eyebrow">Know who I am</span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-5">
            ABOUT <span className="text-green-400">ME</span>
          </h1>
        </div>

        {user.map((item, index) => (
          <div
            key={index}
            className="card-glow hover:transform-none! w-full max-w-5xl mx-auto mt-14 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-5 items-center gap-8 lg:gap-12 overflow-hidden"
          >
            {/* Photo */}
            <div className="relative lg:col-span-2 flex justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-x-6 bottom-0 top-10 rounded-full bg-green-400/20 blur-3xl"
              />
              <img
                src={item.profile_image}
                alt={`${item.full_name} portrait`}
                className="fade-bottom relative w-56 sm:w-72 lg:w-full max-w-sm object-cover"
              />
            </div>

            {/* Info */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-3 py-1 text-xs text-green-300">
                <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                Open to freelance &amp; internships
              </span>

              <h2 className="text-white font-bold text-3xl sm:text-4xl mt-5">
                {item.full_name}
              </h2>
              <p className="text-green-400 mt-2 text-sm tracking-wide">
                IT Engineering Student, Fullstack Developer
              </p>

              <p className="text-gray-300 leading-7 mt-6">{item.bio}</p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                {iconconnect.map((icon, i) => (
                  <a
                    key={i}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-400/10"
                  >
                    <img className="size-5 invert" src={icon.icon} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* MORE ABOUT ME */}
        <div className="text-center mt-28">
          <span className="eyebrow">Beyond the code</span>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-5">
            MORE <span className="text-green-400">ABOUT</span> ME
          </h2>
        </div>
        <CartMoreAboutMe />
      </div>

      {/* TECHNOLOGIES */}
      <section className="pb-24 text-center">
        <span className="eyebrow">Tech stack</span>
        <h2 className="text-white text-3xl sm:text-4xl font-bold mt-5 uppercase">
          Technologies I <span className="text-green-400">Work With</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-4 mb-6">
          A collection of programming languages and tools I use to build modern
          applications.
        </p>

        <UsageLogoLoop />
      </section>
      <MoveToTop />
    </div>
  );
};

export default About;
