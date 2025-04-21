import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {projectData.length === 0 && (
        <p className="text-gray-600">
          No projects to display yet. Check back soon!
        </p>
      )}
    </div>
  );
}
