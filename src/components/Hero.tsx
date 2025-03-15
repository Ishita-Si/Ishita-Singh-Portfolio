import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Ishita from "../components/component/Ishita21.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-purple-600 to-pink-500">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986')] mix-blend-soft-light opacity-30 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white p-4 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-40 h-32 mx-auto bg-white/10 backdrop-blur-lg rounded-full p-1 shadow-xl mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" 
            style={{
              backgroundImage:
                `url(${Ishita})`,
            }}/>
          </div>
        </motion.div>
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
        >
          Ishita Singh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 text-purple-100"
        >
          Computer Science & AI Student | Frontend Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/ishita-singh09/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="https://github.com/Ishita-Si"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github size={24} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/i_shhh09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Instagram size={24} className="text-white" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;