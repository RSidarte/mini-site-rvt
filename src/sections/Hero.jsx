function Hero() {
    return (
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white text-center px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
          Salut, moi c’est <span className="text-blue-600">Sidarte</span> 👋
        </h1>
        <p className="text-lg text-gray-600 mb-6 animate-fade-in delay-200">
          Je construis des interfaces web avec <strong>React & Tailwind</strong>
        </p>
        <a
          href="#team"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-all animate-fade-in delay-400"
        >
          Voir l’équipe
        </a>
      </section>
    );
  }
  
  export default Hero;
  