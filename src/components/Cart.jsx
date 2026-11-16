import delication from "../assets/image/delication.png";
import smartwork from "../assets/image/smartwork.png";
import collaboration from "../assets/image/collaboration.png";
import technology from "../assets/image/technology.png";

const list = [
  {
    icon: delication,
    title: "Dedication",
    text: "My family, mentors, and everyone who has supported my journey in technology. Your encouragement inspires me to keep learning, creating, and growing every day.",
  },
  {
    icon: smartwork,
    title: "Smart Work",
    text: "Working efficiently, thinking critically, and using technology effectively to build meaningful and impactful solutions.",
  },
  {
    icon: collaboration,
    title: "Collaboration",
    text: "Working with others, sharing ideas, and combining strengths to build better and more meaningful solutions.",
  },
  {
    icon: technology,
    title: "Technology",
    text: "Technology is the foundation of my work, and I continuously explore new tools, frameworks, and innovations to build better solutions.",
  },
];

const Cart = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {list.map((item) => (
        <div key={item.title} className="card-glow flex flex-col p-6">
          <div className="icon-tile">
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className="w-10 h-10 object-contain"
            />
          </div>

          <h2 className="text-white text-xl font-bold text-center mt-6">
            {item.title}
          </h2>

          <p className="text-gray-400 text-sm text-center mt-3 leading-7">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
