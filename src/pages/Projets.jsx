import PageWrapper from '../components/PageWrapper';

const projets = [
    {
      id: 'react-dashboard',
      title: 'Dashboard React',
      description: 'Un dashboard frontend moderne avec React, Vite et Tailwind.',
      image: 'https://picsum.photos/id/1015/400/300', // image fixe
    },
    {
      id: 'ia-chat',
      title: 'Chat IA Local',
      description: 'Un projet d’interface pour discuter avec une IA en local (Ollama).',
      image: 'https://picsum.photos/id/1016/400/300',
    },
  ];
  

function Projets() {
  return (
    <PageWrapper>
      <section className="min-h-screen bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Mes Projets</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="bg-white shadow-md rounded-lg w-80 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={projet.image} alt={projet.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{projet.title}</h3>
                <p className="text-gray-600 mb-4">{projet.description}</p>
                <a
                  href={`/projets/${projet.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

export default Projets;
