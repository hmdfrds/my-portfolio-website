import { getProjectById, projectData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface ProjectDetailPageProps {
  params: {
    projectId: string; // This must match the folder name '[projectId]'
  };
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectById(params.projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Firdaus`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  console.log(params.projectId);
  const projectId = params.projectId;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/projects" className="text-blue-600 hover:underline">
          &larr; Back to Projects
        </Link>
      </div>
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          {project.title}
        </h1>
        <p className="text-lg text-gray-600">{project.tagline}</p>
      </header>
      <div className="mb-8 shadow-lg rounded-md overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          width={1000}
          height={600}
          className="w-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-wrap gap-4 mb-8">
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-md transition duration-300 ease-in-out"
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && project.repoUrl !== "#" && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-5 rounded-md transition duration-300 ease-in-out"
          >
            Source Code
          </a>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              About the Project
            </h2>
            <p>{project.description}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Project Goals
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {project.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Challenges Faced
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Solutions & Implementation
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              My Role
            </h2>
            <p>{project.role}</p>
          </section>
        </div>

        <aside className="md:col-span-1 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Technology Stack
            </h2>
            <ul className="space-y-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-md shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    projectId: project.id,
  }));
}
