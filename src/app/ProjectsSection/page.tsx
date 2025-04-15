// components/ProjectsSection.tsx
const projects = [
  {
    title: "Gestion de stages",
    description: "Application complète pour la gestion des stages avec Spring Boot + React.",
    github: "#",
  },
  {
    title: "Portfolio personnel",
    description: "Ce portfolio moderne avec Next.js, TypeScript et Tailwind CSS.",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Mes Projets</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <a href={project.github} target="_blank" className="text-blue-600 hover:underline">Voir sur GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
