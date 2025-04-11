import Navbar from './components/Navbar';
import About from './sections/About';
import Team from './sections/Team';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
        <Team />
        <Contact />
      </main>
    </>
  );
}

export default App;
