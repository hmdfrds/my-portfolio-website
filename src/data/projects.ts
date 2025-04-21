export interface Project {
  id: string;
  title: string;
  tagline: string;
  imageUrl: string;
  technologies: string[];
}

export const projectData: Project[] = [
  {
    id: "flutter-object-detection",
    title: "Flutter Object Detection",
    tagline: "A mobile application for detecting object.",
    imageUrl: "/images/projects/flutter-object-detection.png",
    technologies: ["Flutter", "TensorFlow Lite"],
  },
];
