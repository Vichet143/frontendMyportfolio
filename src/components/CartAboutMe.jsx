import web from "../assets/image/web.png";
import computerscience from "../assets/image/computerscience.png";
import backend from "../assets/image/backend.png";

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

const CartAboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {list.map((item) => (
        <div key={item.title} className="card-glow flex flex-col p-7">
          <div className="icon-tile">
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className="w-10 h-10 object-contain"
            />
          </div>

          <h3 className="text-white text-xl font-bold text-center mt-6">
            {item.title}
          </h3>

          <p className="text-gray-400 text-sm text-center mt-3 leading-7">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartAboutMe;
