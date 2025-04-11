import ProfileCard from "../components/ProfileCard";

function Team() {
    const team = [
      {
        name: "Alice Dupont",
        role: "Développeuse Frontend",
        image: "https://i.pravatar.cc/100?u=1",
      },
      {
        name: "Bob Martin",
        role: "Développeur Backend",
        image: "https://i.pravatar.cc/100?u=2",
      },
      {
        name: "Charlie Durand",
        role: "Designer UI/UX",
        image: "https://i.pravatar.cc/100?u=3",
      },
    ];
    return (
      <section id="team" className="min-h-screen bg-white py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Notre Équipe</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>
    );
  }
  export default Team;
  