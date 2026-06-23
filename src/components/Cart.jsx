import delication from "../assets/image/delication.png"
import smartwork from "../assets/image/smartwork.png"
import collaboration from "../assets/image/collaboration.png"
import technology from "../assets/image/technology.png"

const Cart = () => {
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

  return (
    <div className="flex flex-wrap justify-center gap-8 my-4 px-4">
      
      {list.map((item, index) => (
        <div
          key={index}
          className={`w-full sm:w-[320px] lg:w-70 min-h-90 border border-green-400 p-5 ${index % 2 === 0 ? "lg:-translate-y-4" : "lg:translate-y-2"} rounded transition-transform duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 hover:border-green-400`}
        >
          <div className="w-24 mx-auto">
    <img
        src={item.icon}
        alt={item.title}
        className="w-full h-auto"
    />
</div>

          <h1 className="text-white text-2xl font-bold text-center mt-5">{item.title}</h1>

          <p className="text-gray-400 text-center mt-5 leading-7">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
