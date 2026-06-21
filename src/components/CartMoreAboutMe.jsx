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
    <div className="mt-20 grid gap-6 md:grid-cols-2">
      {storeData.map((item, index) => (
        <div key={index} className="rounded-3xl border border-green-400/30 bg-slate-950/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-green-400">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-400/10 text-green-400">
              {item.icon}
            </div>
            <h1 className="font-bold text-xl tracking-[0.1rem] text-white">
              {item.title}
            </h1>
          </div>

          {item.datalist.map((item2, index2) => (
            <p className="mb-3 text-gray-400 text-[14px]" key={index2}>
              / {item2}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CartMoreAboutMe;
