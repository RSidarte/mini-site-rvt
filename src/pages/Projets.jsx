import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
    const [search, setSeach] = useState('');

    const filteredProjects = projets.filter((projet) =>
        projet.title.toLowerCase().includes(search.toLowerCase()) ||
        projet.description.toLowerCase().includes(search.toLowerCase())
      );
      
  return (
    <PageWrapper>
      <section className="min-h-screen bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Mes Projets</h2>
        <div className="max-w-md mx-auto mb-10">
            <input
                type="text"
                placeholder="Rechercher un projet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 border rounded shadow-sm"
            />
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {filteredProjects.map((projet) => (
            <div
              key={projet.id}
              className="bg-white shadow-md rounded-lg w-80 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={projet.image} alt={projet.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{projet.title}</h3>
                <p className="text-gray-600 mb-4">{projet.description}</p>
                <Link to={`/projets/${projet.id}`} className="text-blue-500 hover:underline">
                  Voir le projet →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

export default Projets;
