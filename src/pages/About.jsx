function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 flex items-center justify-center bg-transparent"
    >
      <div className="max-w-5xl w-full space-y-10 text-white z-10" data-aos="fade-up">
        <h1 className="text-4xl font-bold gradient-text text-center">About Me</h1>

        <p className="text-gray-300 text-lg leading-relaxed text-center text-shadow-glow">
          Hi! I'm <strong>Sai Vardhan Reddy Pathuri</strong>, a Master's student in Computer Science at
          Northeastern University (Khoury College) concentrating in ML/NLP. I care less about models in notebooks and more about what it takes to get them running reliably in production — the pipelines, the infrastructure, the edge cases.Right now I'm building FitOS, a wearable-agnostic health tracking system that pulls data across devices into one coherent picture — a project born out of wanting infrastructure-level control over my own health data instead of being locked into one vendor's app.
          I'm drawn to problems at the intersection of ML and systems engineering: making models fast, reliable, and actually useful in the real world.
        </p>

        {/* Education */}
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-400">Education</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>M.S. Computer Science</strong> — Northeastern University, Khoury College (Sep 2025 – Dec 2027) — GPA 3.6/4.0
              <br />
              <span className="text-gray-400 text-sm ml-5">Coursework: Machine Learning, NLP, Web Development, Algorithms, Cloud Computing, MLOps, Program Design Paradigms</span>
            </li>
            <li>
              <strong>B.Tech, Computer Science</strong> — Geethanjali College of Engineering & Technology (Sep 2021 – Aug 2025) — CGPA 8.2
              <br />
              <span className="text-gray-400 text-sm ml-5">Coursework: Machine Learning, Artificial Intelligence, Algorithms, DBMS, Operating Systems, OOP, Software Engineering, DAA</span>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-blue-400">Experience</h2>
          <div className="text-gray-300">
            <p className="font-semibold">Teaching Assistant, Data Structures & Algorithms — Smart Interviews</p>
            <p className="text-sm text-gray-400">Aug 2024 – Mar 2025 · Hyderabad, India</p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Mentored 150+ students across beginner-to-advanced DSA tracks; designed practice sets and mock interviews modeled on FAANG-style technical screens.</li>
              <li>Led 30+ live problem-solving sessions and Q&A meetings, with measurable improvements in student contest performance.</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-blue-400">Skills</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>Core ML:</strong> PyTorch, Hugging Face Transformers, scikit-learn, LightGBM, SHAP</li>
            <li><strong>Data:</strong> Pandas, NumPy, spaCy, Feature Engineering, Cross-Validation, SMOTE</li>
            <li><strong>Languages:</strong> Python, Java, JavaScript/TypeScript, SQL</li>
            <li><strong>Backend:</strong> Flask, FastAPI, Node.js, Express, Next.js, REST APIs</li>
            <li><strong>Cloud & Deployment:</strong> AWS (IAM, VPC, SageMaker, Lambda, EC2, S3, Textract, Bedrock, DynamoDB, CloudWatch, SNS, EventBridge), Terraform, Docker, Kubernetes, GitHub Actions, Vercel, Render</li>
            <li><strong>Databases:</strong> MongoDB (Atlas, Mongoose), PostgreSQL, MySQL</li>
          </ul>
        </div>

        {/* Problem Solving */}
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold text-blue-400">Problem Solving</h2>
          <p className="text-gray-300">
            Active competitive programmer with an <strong>1800+ rating</strong> on LeetCode.
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
        <div className="glass-card dark p-6 rounded-lg shadow space-y-4" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-semibold text-blue-400">Achievements</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Top 3% globally in IEEE Xtreme 17.0</li>
            <li>1800+ rating on LeetCode</li>
            <li>Ranked #1 across college in Smart Interviews competitive DSA program; offered TA role</li>
            <li>AWS Cloud Foundations, Cisco IoT, Google Data Analytics certified</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
