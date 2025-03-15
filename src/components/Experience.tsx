import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Scholar",
    company: "SheFi",
    date: "Present",
    icon: <Briefcase />,
    type: "experience"
  },
  {
    title: "Member",
    company: "Rewriting the Code",
    date: "Present",
    icon: <Briefcase />,
    type: "experience"
  },
  {
    title: "Contributor",
    company: "GirlScript Summer of Code",
    date: "Present",
    icon: <Briefcase />,
    type: "experience"
  },
  {
    title: "IDD (BTech+MTech) in Computer Science and AI",
    company: "Rajiv Gandhi Institute of Petroleum Technology",
    date: "2024 - 2029",
    icon: <GraduationCap />,
    type: "education"
  },
  {
    title: "XII CBSE, Mathematics",
    company: "M.I.S. International School",
    date: "2024",
    icon: <GraduationCap />,
    type: "education"
  },
  {
    title: "X CBSE",
    company: "Sunbeam School Ayodhya",
    date: "2022",
    icon: <GraduationCap />,
    type: "education"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience & Education</h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
              date={exp.date}
              iconStyle={{
                background: exp.type === 'education' ? '#3b82f6' : '#10b981',
                color: '#fff',
                boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.1)',
              }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title font-bold text-blue-100">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-200 mt-2">
                {exp.company}
              </h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;