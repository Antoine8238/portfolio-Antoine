// components/SkillsSection.tsx
const skills = ["Flutter", "Next.js", "Spring Boot", "MySQL", "HTML-CSS", "Python", "Java", "Javascript"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Compétences</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full shadow-sm text-sm">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
