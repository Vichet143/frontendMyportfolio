import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About";
import Education from "../pages/Education";
import Project from "../pages/Project";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/education" element={<Education/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}