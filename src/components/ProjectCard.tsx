import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="block border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white group"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {project.tagline}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{project.tagline}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
