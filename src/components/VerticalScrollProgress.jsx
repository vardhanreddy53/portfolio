import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

function VerticalScrollProgress() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : 0;
      });

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i] - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
            activeSection === section
              ? "bg-blue-500 border-blue-500 scale-125"
              : "bg-gray-400 border-gray-400 hover:bg-blue-400"
          }`}
          title={section}
        ></button>
      ))}
    </div>
  );
}

export default VerticalScrollProgress;
