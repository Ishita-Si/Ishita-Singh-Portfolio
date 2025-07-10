import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';
import { ExternalLink, Github } from 'lucide-react';
import gemini from  "../components/component/Gemini.png"
import sanraksha from  "../components/component/Banner (1).png"
import agnirakshak from  "../components/component/agnirakshak.png"
import { ArrowLeftFromLine } from 'lucide-react';
import { useEffect } from 'react';

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
    title: "SanRaksha:Safeguarding MOMs",
    description: "A smart healthcare application for risk prediction using vital signs and OCR integration",
  image: sanraksha,
  techStack: ["Web Development", "Geolocation-Based Statistical Dashboards"],
  features: [
    "Vital Sign Data Entry – Users can input key health metrics such as blood pressure, sugar levels, etc.",
    "OCR Integration – Automates data entry by extracting health metrics from medical reports or handwritten notes",
    "Health Risk Prediction – Uses trained ML models to predict if a user is at risk based on entered data",
    "User-Friendly Interface – Built using Streamlit for easy access and real-time feedback",
    "API-First Architecture – FastAPI is used for backend services, making the app scalable and modular"
  ],
  overview: "SanRaksha is aimed at simplifying health monitoring and risk detection. By integrating machine learning with OCR-based automation, it enables users—especially in rural or underserved areas—to easily enter health data and receive early warnings of potential health risks. Its simple UI ensures accessibility for all age groups and digital literacy levels.",

    livedemo: "",
    githublink: "https://github.com/sys6-exe/SanRaksha",
  },
  {
    title: "BlazeTrack",
    description: "An AI-powered wildfire detection and prediction system for real-time risk monitoring",
image: agnirakshak,
techStack: ["Python", "U-Net", "Attention Mechanism", "FastAPI", "Streamlit", "Machine Learning",'Deep Learning'],
features: [
  "Wildfire Detection – Uses U-Net with attention mechanism to identify fire regions from satellite imagery",
  "Fire Spread Prediction – Forecasts possible spread zones to support proactive measures",
  "User Interface – Streamlit frontend for visualizing fire risk maps and uploading data",
  "API Support – FastAPI backend enables modular design and integration with other systems",
  "Data-Driven Insights – Leverages real-time and historical satellite data for accurate predictions"
],
overview: "BlazeTrack is an intelligent wildfire management solution aimed at detecting active fires and predicting their spread using satellite imagery and deep learning. Built for regions like Uttarakhand, the system combines U-Net and attention mechanisms for accurate image segmentation, backed by a clean UI and scalable backend. It empowers authorities and communities with early warnings and actionable fire risk insights.",
    livedemo: "",
    githublink: "",
  }
];

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
  if (selectedProject) {
    window.history.pushState({ modalOpen: true }, '');
  }
  const handlePopState = () => {
    if (selectedProject) {
      setSelectedProject(null);
    }
  };

  window.addEventListener('popstate', handlePopState);

  return () => {
    window.removeEventListener('popstate', handlePopState);
  };
}, [selectedProject]);
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
            <h3 className="text-2xl font-bold mb-4">
              <button
              onClick={() => setSelectedProject(null)}
              className="mt-3 px-3 py-1 bg-gray-200 text-gray-1000 rounded-lg hover:bg-gray-300 transition-colors"
            >
            <ArrowLeftFromLine className="w-6 h-6" />
            </button>
            {' '}{selectedProject.title}</h3>
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