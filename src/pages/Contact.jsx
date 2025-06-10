import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 bg-transparent"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-10 text-center">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />

          <div className="glass-card dark p-6 rounded-lg text-white">
            <h2 className="text-xl font-semibold mb-4">Reach Out Directly</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-400" />
                <span>saivardhanreddypathuri@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaGithub className="text-white" />
                <a href="https://github.com/vardhanreddy53" target="_blank" rel="noreferrer" className="underline">
                  github.com/vardhanreddy53
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedin className="text-blue-500" />
                <a href="https://linkedin.com/in/vardhanreddy53" target="_blank" rel="noreferrer" className="underline">
                  linkedin.com/in/vardhanreddy53
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <SiLeetcode className="text-yellow-500" />
                <a href="https://leetcode.com/u/vardhanreddy53/" target="_blank" rel="noreferrer" className="underline">
                  leetcode.com/u/vardhanreddy53
                </a>
              </li>
              <li>
                <a
                  href="/resume/Pathuri_vardhan_resume.pdf"
                  download
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg btn-glow"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
