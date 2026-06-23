import web from "../assets/image/web.png";
import computerscience from "../assets/image/computerscience.png";
import backend from "../assets/image/backend.png";

const CartAboutMe = () => {
  const list = [
    {
      icon: web,
      title: "Web Development",
      text: "Skilled in building responsive and user-friendly web applications using modern frameworks and technologies.",
    },
    {
      icon: backend,
      title: "Backend Development",
      text: "Experienced in building modern, responsive web applications-backend using Node.js, Express.js, Spring Boot and Laravel & PHP",
    },
    {
      icon: computerscience,
      title: "Computer Science",
      text: "Strong foundation in data structures and algorithms, and programming principles.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 my-4 px-4">
      {list.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[320px] lg:w-87.5 min-h-80 border border-green-400 p-5 rounded"
        >
          <div className="w-24 mx-auto">
            <img src={item.icon} alt={item.title} className="w-full h-auto" />
          </div>

          <h1 className="text-white text-2xl font-bold text-center mt-5">
            {item.title}
          </h1>

          <p className="text-gray-400 text-center mt-5 leading-7">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartAboutMe;
