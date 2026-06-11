import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
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
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Boston, MA</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-green-400" />
                <a href="tel:+19723489762" className="underline">+1 972-348-9762</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:saivardhanreddypathuri@gmail.com" className="underline">saivardhanreddypathuri@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaGithub className="text-white" />
                <a href="https://github.com/vardhanreddy53" target="_blank" rel="noreferrer" className="underline">
                  github.com/vardhanreddy53
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedin className="text-blue-500" />
                <a href="https://linkedin.com/in/saivardhanreddypathuri" target="_blank" rel="noreferrer" className="underline">
                  linkedin.com/in/saivardhanreddypathuri
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <SiLeetcode className="text-yellow-500" />
                <a href="https://leetcode.com/u/vardhanreddy53/" target="_blank" rel="noreferrer" className="underline">
                  leetcode.com/u/vardhanreddy53
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
