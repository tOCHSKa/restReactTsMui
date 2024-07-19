import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Carte from './Carte';
import Blog from './Blog';
import Galerie from './Galerie';
import Contact from './Contact';
import Connexion from '../components/Connexion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Root: React.FC = () => {
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
            </Routes>
            <Footer />
        </Router>
    );
};

export default Root;
