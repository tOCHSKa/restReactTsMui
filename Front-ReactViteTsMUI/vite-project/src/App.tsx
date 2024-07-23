import Connexion from './routes/Connexion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Create from './routes/Create';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Accueil = lazy(() => import('./routes/Accueil'));
const Blog = lazy(() => import('./routes/Blog'));
const Carte = lazy(() => import('./routes/Carte'));
const Galerie = lazy(() => import('./routes/Galerie'));
const Contact = lazy(() => import('./routes/Contact'));
// const NotFound = lazy(() => import('./routes/NotFound'));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/register" element={<Create />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
