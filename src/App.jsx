import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollProgress from "./components/ScrollProgress";
import VerticalScrollProgress from "./components/VerticalScrollProgress";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  // detect dark mode (optional for scroll background)
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Backgrounds */}
      <div className={`scroll-gradient ${isDark ? "dark" : "light"}`}></div>
      {isDark ? <div className="stars-bg" /> : <div className="clouds-bg" />}
      <ScrollProgress />

      <Navbar />
      <VerticalScrollProgress />

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
