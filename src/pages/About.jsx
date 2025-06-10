function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 flex items-center justify-center bg-transparent"
    >
      <div className="max-w-5xl w-full space-y-10 text-white z-10" data-aos="fade-up">
        <h1 className="text-4xl font-bold gradient-text text-center">About Me</h1>

        <p className="text-gray-300 text-lg leading-relaxed text-center text-shadow-glow">
          Hi! I'm <strong>Pathuri Sai Vardhan Reddy</strong>, a Computer Science student at Geethanjali College of Engineering & Technology with a CGPA of 8.2.
          I’m passionate about building web apps and solving algorithmic challenges.
        </p>

        {/* Education */}
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-400">Education</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>B.Tech:</strong> GCET (2021–2025) – CGPA 8.2</li>
            <li><strong>Intermediate:</strong> Nano Junior College – 94%</li>
            <li><strong>High School:</strong> BVBPS – 84%</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-blue-400">Skills</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Languages:</strong> Java, Python, C/C++, JavaScript, SQL</li>
            <li><strong>Web:</strong> HTML, CSS, Node.js, React.js, Flask</li>
            <li><strong>Tools:</strong> Git, MongoDB, VS Code, Jupyter Notebook</li>
            <li><strong>Libraries:</strong> Scikit-learn, Pandas, NumPy, TensorFlow</li>
          </ul>
        </div>

        {/* Problem Solving */}
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-blue-400">Problem Solving</h2>
          <p className="text-gray-300">
            I enjoy competitive programming and have solved over <strong>450+ problems</strong> on LeetCode.
            My current contest rating is <strong>1793</strong>.
          </p>
          <a
            href="https://leetcode.com/u/vardhanreddy53/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-600 transition"
          >
            View LeetCode Profile →
          </a>
        </div>

        {/* Achievements */}
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold text-blue-400">Achievements</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Diamond Certified Coder at Smart Interviews</li>
            <li>Ranked 518th globally in IEEE Xtreme 17.0</li>
            <li>Top 15 in Supraja Technologies CTF</li>
            <li>AWS Cloud Foundations, Cisco IoT, Google Data Analytics (in progress)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
