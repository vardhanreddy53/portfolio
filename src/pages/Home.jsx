import { useEffect, useState } from "react";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const detectTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("scroll", onScroll);
    detectTheme();

    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center z-10">
      <div data-aos="fade-up" className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
          Hi, I'm Sai Vardhan Reddy Pathuri
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 text-shadow-glow">
          I build production ML systems — from OCR pipelines processing real documents to FitOS, a wearable-agnostic health tracking platform I'm building from the ground up. MS Computer Science student at Northeastern, focused on applied ML and the engineering that gets models to actually ship.
        </p>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="#projects"
          className="btn-glow bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          View Projects
        </a>

        <a
          href="#about"
          className="btn-glow bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          About Me
        </a>

        <a
          href="https://leetcode.com/u/vardhanreddy53/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition"
        >
          LeetCode 1800+
        </a>
        </div>
      </div>

      {/* Optional Animated Blur Layer */}
      <div
        className={`blur-layer ${isDark ? "dark" : "light"}`}
        style={{ width: "300px", height: "300px", top: "20%", left: "10%" }}
      />
    </div>
  );
}

export default Home;
