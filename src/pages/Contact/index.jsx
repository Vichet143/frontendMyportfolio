import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import UserService from "../../service/UserService";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
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

  const icon = [
    { name: "Email", icon: AiOutlineMail },
    { name: "Location", icon: CiLocationOn },
  ];

  const icon2 = [
    { name: "LinkedIn", icon: SlSocialLinkedin },
    { name: "Telegram", icon: LiaTelegramPlane },
  ];

  const data = [
    {
      text: "choubvichet1001@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&to=choubvichet1001@gmail.com",
    },
    {
      text: "SonSam Kosal, Phnom Penh, Cambodia",
      link: "https://maps.app.goo.gl/qzfTrKJkApEBPUrT8",
    },
  ];

  return (
    <div className="my-40">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold tracking-[0.3rem] uppercase">
          Let's Connect
        </h1>
        <p className="text-center text-gray-400 mt-5 tracking-[0.1rem]">
          Open for internships, freelance work, and collaborations.
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-6 mt-10 lg:mt-20 px-4">
          <div>
            <div className="w-full max-w-md bg-black p-6 rounded mx-auto">
              <h1 className="text-2xl tracking-[0.1rem] font-bold">
                Contact Information
              </h1>
              <div className="mt-10">
                {data.map((item, index) => {
                  const Icon = icon[index].icon;

                  return (
                    <a key={index} href={item.link}>
                      <div className="w-full bg-gray-500/20 border border-green-400 rounded p-3 sm:p-2 my-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-10 h-10 bg-green-400/40 rounded-full flex items-center justify-center">
                          <Icon className="text-white text-xl" />
                        </div>

                        <div>
                          <h1>{icon[index].name}</h1>
                          <p className="text-gray-400">{item.text}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
              <h1 className="font-bold mt-10 tracking-[0.1rem]">
                Social Media
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                {icon2.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div>
                      {user.map((userdata) => (
                        <a
                          key={index}
                          href={
                            index === 0
                              ? userdata.linkedin_url
                              : userdata.github_url
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-12 w-12 items-center justify-center rounded-full
                   bg-gray-800 border border-gray-700
                   transition-all duration-300 ease-in-out
                   hover:-translate-y-1 hover:scale-110
                   hover:border-green-400 hover:bg-green-400/20
                   hover:shadow-lg hover:shadow-green-400/20"
                        >
                          <Icon className="text-xl text-gray-300 transition-colors duration-300 group-hover:text-green-400" />
                        </a>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full max-w-md border border-green-400 p-6 rounded mt-10 mx-auto">
              <h1 className="font-bold tracking-[0.1rem]">Response Time</h1>
              <p className="tracking-[0.1rem] text-gray-400 text-[13px] mt-2">
                I strive to respond to all messages as quickly as possible.
              </p>
            </div>
          </div>

          {/* <div className="w-120 h-50 border border-green-400 p-6 rounded"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
