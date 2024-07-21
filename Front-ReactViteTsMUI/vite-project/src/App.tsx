import Accueil from './routes/Accueil';
import Carte from './routes/Carte';
import Blog from './routes/Blog';
import Galerie from './routes/Galerie';
import Contact from './routes/Contact';
import Connexion from './routes/Connexion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Create from './routes/Create';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/register" element={<Create />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
