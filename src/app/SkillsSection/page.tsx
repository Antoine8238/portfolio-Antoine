"use client";
import { motion } from "framer-motion";
// Optionnel : tu peux installer react-icons pour les logos
// npm install react-icons
import {  FaJava, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJavascript, SiFlutter, SiNextdotjs, SiUnity } from "react-icons/si";

const skills = [
  { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Unity", icon: <SiUnity className="text-gray-800 dark:text-white" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "HTML-CSS", icon: <FaHtml5 className="text-orange-500" />, extra: <FaCss3Alt className="text-blue-400 ml-1" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Javascript", icon: <SiJavascript className="text-yellow-400" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, type: "spring", stiffness: 80 }
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
      <h2 className="text-3xl md:text-4xl font-title font-bold mb-10 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-black drop-shadow">
        Compétences
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg bg-white/80 backdrop-blur-md border border-primary/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <span className="text-2xl">{skill.icon}{skill.extra}</span>
            <span className="font-bold text-primary">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;