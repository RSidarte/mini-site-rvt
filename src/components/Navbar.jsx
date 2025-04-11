function Navbar() {
    return (
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Labaky</h1>
          <ul className="flex space-x-4 text-gray-600 font-medium">
            <li><a href="#about" className="hover:text-blue-500">À propos</a></li>
            <li><a href="#team" className="hover:text-blue-500">Équipe</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  