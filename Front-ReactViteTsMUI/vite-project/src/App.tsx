import React from 'react';
import Navbar from './components/Navbar';  // Correspond à Navbar.tsx
import Accueil from './components/Accueil';  // Correspond à Navbar.tsx
import Carte from './components/Carte';
import Blog from './components/Blog';
import Galerie from './components/Galerie';
import Contact from './components/Contact';
import Connexion from './components/Connexion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </Router>
  );
};
export default App;
