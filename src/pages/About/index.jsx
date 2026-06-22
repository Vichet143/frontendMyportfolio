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
    <div className="container">
      <div className="py-50">
        <h1 className="text-center font-bold text-3xl tracking-[0.5rem]">
          ABOUT{" "}
          <span className="px-3 py-1 border border-green-400 rounded">ME</span>
        </h1>
        <h1 className="text-center font-bold text-xl tracking-[0.5rem] my-3 mt-7">
          KNOW WHO AM I
        </h1>
        {user.map((item, index) => (
          <div
            key={index}
            className="border border-green-400 w-100 h-150 flex justify-center items-center relative rounded-3xl mt-30"
          >
            <img
              src={item.profile_image}
              alt=""
              className="scale-x-[-1] w-full absolute -top-5 left-20 "
            />
            <div className="absolute w-200 h-100 bg-black left-90 rounded-2xl p-10">
              <p className="font-bold text-2xl tracking-[0.2rem]">
                {item.full_name}
              </p>
              <p className="text-gray-400 mt-3 text-[14px]">
                IT Engineering Student, Fullstack Developer
              </p>
              <p className="mt-10">{item.bio}</p>
              <div className="flex flex-row gap-4 justify-start mt-3">
                {iconconnect.map((item, index) => (
                  <div key={index} className="flex flex-row">
                    <a href={item.link}>
                      <img
                        className="border bg-white hover:border-green-400 border-gray-400 rounded-full w-14 p-2 my-5 hover:translate-1.5 duration-300 transition-transform"
                        src={item.icon}
                        alt=""
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <h1 className="text-center mt-30 font-bold text-2xl tracking-[0.5rem]">
          MORE{" "}
          <span className="border border-green-400 px-2 py-1 rounded mr-5">
            ABOUT
          </span>
          ME
        </h1>
        <CartMoreAboutMe />
      </div>
      <h1 className="text-center font-bold text-3xl tracking-[0.5rem] my-3 uppercase">
        Technologies I Work With
      </h1>
      <div className="flex justify-center">
        <p className="text-gray-400 text-center w-130 py-3 mb-10">
          A collection of programming languages and tools I use to build modern
          applications
        </p>
      </div>

      <UsageLogoLoop />
      <MoveToTop />
    </div>
  );
};

export default About;
