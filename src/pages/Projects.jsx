import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 bg-transparent"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-10">
          Projects
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
