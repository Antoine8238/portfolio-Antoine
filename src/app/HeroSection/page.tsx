// components/HeroSection.tsx
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-50 to-white pt-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Bonjour, je suis Antoine Emmanuel ESSOMBA ESSOMBA</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">Étudiant en 4e année de Génie Informatique à l&Ecole Nationale Supérieure Polytechnique de Yaoundé , passionné par le développement web front-end</p>
      <a href="/CV-Antoine.pdf" download className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Télécharger mon CV</a>
    </section>

  );
};

export default HeroSection;
