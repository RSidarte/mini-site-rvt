import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import ContactPage from "./pages/ContactPage";
import Projets from "./pages/Projets";
import ProjetDetail from "./pages/ProjetDetail";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projets/:id" element={<ProjetDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
