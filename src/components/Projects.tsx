import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';
import { ExternalLink, Github } from 'lucide-react';
import gemini from  "../components/component/Gemini.png"
import expense from  "../components/component/Expense.png"

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  overview: string;
  livedemo: string;
  githublink: string;
}

const projects: Project[] = [
  {
    title: "Gemini Clone",
    description: "AI-powered chatbot web application built using React and the Gemini API",
    image: gemini,
    techStack: ["React", "Tailwind CSS", "Sass", "Gemini API"],
    features: [
      "AI-Powered Chat – Users can input queries and receive intelligent responses",
      "Responsive UI – Designed with Tailwind CSS for a sleek and modern interface",
      "Fast and Lightweight – No backend required, ensuring smooth performance",
      "Dynamic Conversation Flow – Uses React state to handle and display chat history"
    ],
    overview: "The Gemini Clone is an AI-powered chatbot web application that allows users to interact with an AI assistant in real-time, providing responses similar to Google's Gemini chatbot. The project focuses on a seamless, modern UI with an efficient and interactive user experience.",
    livedemo: "https://cancan09-gemini.netlify.app/ ",
    githublink: " ",
  },
  {
    title: "Expense Tracker",
    description: "A web application for managing daily expenses and budget tracking",
    image: expense,
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    features: [
      "Add & Delete Transactions – Users can enter income or expenses and remove them when needed",
      "Real-Time Balance Calculation – The app dynamically updates the total balance",
      "Expense Categorization – Allows sorting expenses into different categories",
      "Local Storage Support – Data persists even after refreshing the page"
    ],
    overview: "The Expense Tracker is a simple yet effective web application designed to help users manage their daily expenses. This project allows users to log their income and expenses, track spending habits, and maintain financial discipline—all within a clean and intuitive interface.",
    livedemo: "https://ishita-si.github.io/Expense-Tracker/",
    githublink: " https://github.com/Ishita-Si/Expense-Tracker",
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986')] opacity-5 bg-cover bg-center" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-lg font-medium">Click to view details</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="text-gray-800">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Overview</h4>
                <p>{selectedProject.overview}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Features</h4>
                <ul className="list-disc list-inside space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-6">
              <a
                  href={selectedProject.livedemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github size={18} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;