import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About";
import Education from "../pages/Education";
import Project from "../pages/Project";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { useMetaPixel } from "@adkit/meta-pixel-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AppRoutes() {
  const meta = useMetaPixel();
  const location = useLocation();

  useEffect(() => {
    if (meta.isLoaded()) {
      meta.track("PageView");
    }
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
