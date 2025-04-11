import Hero from './sections/Hero';
import About from './sections/About';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Team />
        <Contact />
      </main>
    </>
  );
}

export default App;
