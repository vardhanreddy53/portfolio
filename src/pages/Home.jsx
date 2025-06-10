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
          Hi, I'm Pathuri Sai Vardhan Reddy
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 text-shadow-glow">
          A Computer Science student passionate about Web Development, AI/ML, and building impactful software products.
        </p>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#projects"
            className="btn-glow bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="btn-glow bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            View Resume
          </a>

          <a
            href="https://leetcode.com/u/vardhanreddy53/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition"
          >
            LeetCode Profile
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
