import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import email from "../assets/image/email.png";
import telegram from "../assets/image/telegram.png";
import linkedin from "../assets/image/linkedin.png";
import github from "../assets/image/gtihub.png";
import UserService from "../service/UserService";

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Education", to: "/education" },
  { name: "Projects", to: "/projects" },
  { name: "Resume", to: "/resume" },
  { name: "Contact", to: "/contact" },
];

const Footer = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchDatauser = async () => {
      const data = await UserService.getDataUser();
      setUser(Array.isArray(data) ? data : []);
    };
    fetchDatauser();
  }, []);

  const profile = user[0];

  const iconconnect = [
    { name: "GitHub", icon: github, link: profile?.github_url },
    { name: "Telegram", icon: telegram, link: profile?.telegram_url },
    { name: "LinkedIn", icon: linkedin, link: profile?.linkedin_url },
    {
      name: "Email",
      icon: email,
      link: profile?.email
        ? `https://mail.google.com/mail/?view=cm&to=${profile.email}`
        : undefined,
    },
  ];

  return (
    <footer className="bg-black border-t border-green-400/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="font-bold text-2xl tracking-[0.4rem]">
              VICHET{" "}
              <span className="px-3 py-1 border border-green-400 rounded">
                CHOUB
              </span>
            </h2>
            <p className="text-gray-400 max-w-sm mt-5 leading-7 text-sm">
              Building innovative digital solutions with a focus on clean,
              efficient code and exceptional user experiences.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="md:justify-self-center">
            <h3 className="font-bold tracking-[0.3rem] text-sm">QUICK LINKS</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-400 transition-colors hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="md:justify-self-end">
            <h3 className="font-bold tracking-[0.3rem] text-sm">
              CONNECT WITH ME
            </h3>
            <div className="flex flex-wrap gap-3 mt-5">
              {iconconnect.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-400/10"
                >
                  <img className="size-5 invert" src={item.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 Vichet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
