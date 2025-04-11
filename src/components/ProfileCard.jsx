function ProfileCard({ name, role, image }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <img
          src={image}
          alt="photo de profil"
          className="mx-auto rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 mb-4">{role}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
          Contacter
        </button>
      </div>
    );
  }
  
  export default ProfileCard;
  