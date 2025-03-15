import { motion } from 'framer-motion';
import { Brain, Code, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Enthusiast",
      description: "Passionate about exploring the intersection of artificial intelligence and practical applications."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Developer",
      description: "Crafting beautiful and responsive web experiences using modern technologies."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding elegant solutions."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and methodologies to stay at the cutting edge."
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-white/10">
              <p className="text-blue-100 leading-relaxed">
                I am a passionate Computer Science and Artificial Intelligence student at Rajiv Gandhi Institute of Petroleum Technology (RGIPT),
                pursuing an integrated BTech+MTech degree (2024-2029).
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-white/10">
              <p className="text-blue-100 leading-relaxed">
                With a strong foundation in frontend development and data analysis, I combine technical expertise with creative problem-solving
                to build engaging and user-friendly applications.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-white/10">
              <p className="text-blue-100 leading-relaxed">
                I'm constantly exploring new technologies and methodologies to expand my skill set and create innovative solutions
                that make a positive impact.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-white/10">
              <p className="text-blue-100 leading-relaxed">
                My goal is to leverage AI and modern web technologies to build solutions that are not just functional,
                but also intuitive and accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;