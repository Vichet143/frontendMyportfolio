import { useEffect, useState } from "react";
import email from "../assets/image/email.png";
import telegram from "../assets/image/telegram.png";
import linkedin from "../assets/image/linkedin.png";
import github from "../assets/image/gtihub.png";
import UserService from "../service/UserService";

const Footer = () => {
  const [user, setUser] = useState([]);

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

  useEffect(() => {
    const fetchDatauser = async () => {
      const data = await UserService.getDataUser();
      setUser(data);
    };
    fetchDatauser();
  }, []);

  return (
    <div className=" bg-black">
      <div className="container py-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2 p-5">
            <h1 className="font-bold text-2xl tracking-[0.4rem]">
              VICHET{" "}
              <span className="px-3 py-1 border border-green-400 rounded">
                CHOUB
              </span>
            </h1>
            <p className="text-gray-400 max-w-lg mt-5">
              Building innovative digital solutions with a focus on clean,
              efficient code and exceptional user experiences.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-5 flex flex-col items-center lg:items-end">
            <h1 className="font-bold tracking-[0.3rem] text-center lg:text-right">CONNECT WITH ME</h1>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 mt-5">
              {iconconnect.map((item, index) => (
                <div key={index} className="flex flex-row">
                  <a href={item.link}>
                    <img
                      className="w-12 sm:w-14 border bg-white border-gray-400 rounded-full p-2 hover:border-green-400 hover:-translate-y-1 transition duration-300"
                      src={item.icon}
                      alt=""
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400">
          © 2026 Vichet. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
