import "./styles.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home page="home" />} />
          <Route path="/projects" element={<Projects page="projects" />} />
          <Route path="/about" element={<About page="about" />} />
        </Routes>
      </div>
  );
}
