import LogoLoop from "./LogoLoop";
import {
  SiGithub,
  SiGitlab,
  SiJavascript,
  SiSpringboot,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiVuedotjs,
  SiReact,
  SiFirebase,
  SiPostgresql,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiGithub className="text-[#ffffff]" />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiGitlab className="text-[#fc6d26]" />,
    title: "GitLab",
    href: "https://gitlab.com",
  },
  {
    node: <SiJavascript className="text-[#f7df1e]" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    node: <SiTailwindcss className="text-[#06b6d4]" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiHtml5 className="text-[#e34f26]" />,
    title: "HTML5",
    href: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    node: <SiExpress className="text-[#6db33f]" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiSpringboot className="text-[#6db33f]" />,
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
  },
  {
    node: <SiNodedotjs className="text-[#339933]" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiVuedotjs className="text-[#42b883]" />,
    title: "Vue.js",
    href: "https://vuejs.org",
  },
  {
    node: <SiReact className="text-[#61dafb]" />,
    title: "React.js",
    href: "https://react.dev",
  },
  {
    node: <SiFirebase className="text-[#ffa611]" />,
    title: "Firebase",
    href: "https://firebase.google.com",
  },
  {
    node: <SiPostgresql className="text-[#336791]" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiPhp className="text-[#777bb4]" />,
    title: "PHP",
    href: "https://www.php.net",
  },
  {
    node: <SiLaravel className="text-[#f05340]" />,
    title: "Laravel",
    href: "https://laravel.com",
  },
];

const UsageLogoLoop = () => {
  return (
    <div className="flex justify-center">
      <div
        style={{
          height: "220px",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="right"
          logoHeight={56}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology logos"
          useCustomRender={false}
        />
      </div>
    </div>
  );
};

export default UsageLogoLoop;
