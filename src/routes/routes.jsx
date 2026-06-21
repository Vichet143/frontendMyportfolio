import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About";
import Education from "../pages/Education";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/education" element={<Education/>}/>
    </Routes>
  );
}