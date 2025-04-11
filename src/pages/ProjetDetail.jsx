import { useParams } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const projets = [
  {
    id: 'react-dashboard',
    title: 'Dashboard React',
    description: 'Dashboard frontend moderne avec React, Vite et Tailwind.',
    image: 'https://picsum.photos/id/1015/600/400',
    details: 'Ce projet utilise des composants réactifs, des animations, et une structure modulaire.',
  },
  {
    id: 'ia-chat',
    title: 'Chat IA Local',
    description: 'Interface pour discuter avec une IA locale (Ollama).',
    image: 'https://picsum.photos/id/1016/600/400',
    details: 'Le frontend communique avec un backend IA auto-hébergé sur Kubernetes avec API sécurisée.',
  },
];

function ProjetDetail() {
  const { id } = useParams();
  const projet = projets.find((p) => p.id === id);

  if (!projet) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-red-500">Projet introuvable 😢</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="min-h-screen bg-white px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <img
            src={projet.image}
            alt={projet.title}
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{projet.title}</h1>
          <p className="text-gray-600 mb-4">{projet.description}</p>
          <p className="text-gray-700">{projet.details}</p>
        </div>
      </section>
    </PageWrapper>
  );
}

export default ProjetDetail;
