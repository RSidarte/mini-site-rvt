import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Labaky
        </Link>
        <ul className="flex space-x-4 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500">Accueil</Link>
          </li>
          <li>
            <Link to="/equipe" className="hover:text-blue-500">Équipe</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
