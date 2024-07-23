import Connexion from './routes/Connexion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Create from './routes/Create';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const Accueil = lazy(() => import('./routes/Accueil'));
const Blog = lazy(() => import('./routes/Blog'));
const Carte = lazy(() => import('./routes/Carte'));
const Galerie = lazy(() => import('./routes/Galerie'));
const Contact = lazy(() => import('./routes/Contact'));
const Admin = lazy(() => import('./routes/Admin'));
// const NotFound = lazy(() => import('./routes/NotFound'));

const App: React.FC = () => {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/admin';

  return (
    <>
      <ScrollToTop />
      {showNavbarAndFooter && <Navbar />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/register" element={<Create />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
