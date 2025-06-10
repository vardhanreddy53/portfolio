import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ title, description, technologies, link, github }) {
  const isDeployed = link && link.trim() !== "";

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="600"
      className="border rounded-lg shadow p-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <Github size={18} />
          GitHub
        </a>
        {isDeployed && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline flex items-center gap-1"
          >
            <ExternalLink size={18} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
