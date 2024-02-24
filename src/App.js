import "./styles.css";
import Home from "./components/home/Home";
import Experience from "./components/experience/experience";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home page="home" />} />
          <Route path="/experience" element={<Experience page="projects" />} />
        </Routes>
      </div>
  );
}
