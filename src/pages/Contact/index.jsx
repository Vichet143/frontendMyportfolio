import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import UserService from "../../service/UserService";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";

const EMAIL = "choubvichet1001@gmail.com";

const contactItems = [
  {
    name: "Email",
    icon: AiOutlineMail,
    text: EMAIL,
    link: `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
  },
  {
    name: "Location",
    icon: CiLocationOn,
    text: "SonSam Kosal, Phnom Penh, Cambodia",
    link: "https://maps.app.goo.gl/qzfTrKJkApEBPUrT8",
  },
];

const Contact = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await UserService.getDataUser();
        setUser(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const profile = user[0];

  const socials = [
    { name: "LinkedIn", icon: SlSocialLinkedin, link: profile?.linkedin_url },
    { name: "Telegram", icon: LiaTelegramPlane, link: profile?.telegram_url },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's"
        highlight="Connect"
        subtitle="Open for internships, freelance work, and collaborations."
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {/* Contact information */}
        <div className="card-glow hover:transform-none! lg:col-span-3 p-7 sm:p-9">
          <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          <p className="text-gray-400 text-sm mt-2">
            Reach out through any of the channels below.
          </p>

          <div className="mt-8 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-green-400/60 hover:bg-green-400/5"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10">
                    <Icon className="text-2xl text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      {item.name}
                    </p>
                    <p className="text-white mt-0.5 wrap-break-word">
                      {item.text}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <h3 className="text-xs uppercase tracking-widest text-gray-500 mt-10">
            Social media
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="group flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-400/10"
                >
                  <Icon className="text-xl text-gray-300 transition-colors group-hover:text-green-400" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Availability */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="card-glow hover:transform-none! p-7 sm:p-8">
            <div className="flex size-12 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10">
              <FiClock className="text-xl text-green-400" />
            </div>
            <h2 className="font-bold text-white text-xl mt-5">Response Time</h2>
            <p className="text-gray-400 text-sm leading-7 mt-2">
              I strive to respond to all messages as quickly as possible.
            </p>
          </div>

          <div className="card-glow hover:transform-none! flex-1 p-7 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-3 py-1 text-xs text-green-300">
                <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                Available now
              </span>
              <h2 className="font-bold text-white text-xl mt-5">
                Have a project in mind?
              </h2>
              <p className="text-gray-400 text-sm leading-7 mt-2">
                Send me a message and let&apos;s talk about how I can help.
              </p>
            </div>
            <a
              href={contactItems[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green self-start"
            >
              Send an email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
