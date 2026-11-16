const CartMoreAboutMe = () => {
  const storeData = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l2.94 6.08L22 9.27l-5 4.87L18.82 22 12 18.54 5.18 22 7 14.14 2 9.27l7.06-1.19L12 2z" />
        </svg>
      ),
      title: "Personal Interests",
      datalist: [
        "Exploring new technologies",
        "Problem solving",
        "Open-source contributions",
        "Web development projects",
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18L9.5 11.5 16 5" />
          <path d="M8 18h8" />
        </svg>
      ),
      title: "Coding Philosophy",
      datalist: [
        "Clean and maintainable code",
        "Problem solving",
        "Continuous learning",
        "Maintainability and extensibility",
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v13a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5z" />
          <path d="M8 9.5h8" />
          <path d="M8 13.5h8" />
          <path d="M8 17.5h5" />
        </svg>
      ),
      title: "Education Journey",
      datalist: [
        "Computer science fundamentals",
        "Data structures and algorithms",
        "Frontend and backend development",
        "Mobile application design",
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12l19-7-7 19-3-8-9-4z" />
        </svg>
      ),
      title: "Future Goals",
      datalist: [
        "Build impactful web applications",
        "Master modern frontend and backend technologies",
        "Contribute to open-source projects",
        "Continuously improve my skills",
      ],
    },
  ];

  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {storeData.map((item) => (
        <div key={item.title} className="card-glow p-7">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10">
              {item.icon}
            </div>
            <h3 className="font-bold text-xl text-white">{item.title}</h3>
          </div>

          <ul className="space-y-3">
            {item.datalist.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 text-gray-300 text-sm leading-6"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-green-400" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CartMoreAboutMe;
