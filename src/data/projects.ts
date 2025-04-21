export interface Project {
  id: string;
  title: string;
  tagline: string;
  imageUrl: string;
  technologies: string[];
  description: string;
  goals: string[];
  challenges: string[];
  solutions: string[];
  role: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projectData: Project[] = [
  {
    id: "flutter-object-detection",
    title: "Flutter Object Detection",
    tagline: "A mobile application for detecting object.",
    imageUrl: "/images/projects/flutter-object-detection.png",
    technologies: ["Flutter", "TensorFlow Lite"],
    description: "This project if for academic purposes for university courses",
    goals: [
      "Able to train model for image classification.",
      "Able to save picture for future references.",
      "Able to speak the object name.",
    ],
    challenges: [
      "Taking picture and training data.",
      "Provide high quality model for more accuracy.",
    ],
    solutions: ["Collect a lot of data", "Choose best data for the training"],
    role: "Developer",
    liveUrl: "#",
    repoUrl: "https://github.com/hmdfrds/flutter-object-detection",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projectData.find((project) => project.id === id);
};
