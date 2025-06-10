import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // LeetCode icon

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Pathuri Sai Vardhan Reddy</p>
          <p className="text-xs text-gray-400">Built with ❤️ using React & TailwindCSS</p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex space-x-6 text-white">
          <a
            href="mailto:saivardhanreddypathuri@gmail.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/vardhanreddy53"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vardhanreddy53"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/vardhanreddy53/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            aria-label="LeetCode"
          >
            <SiLeetcode size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
