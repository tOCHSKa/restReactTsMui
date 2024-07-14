import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Logo = styled('img')({
    height: 40, // Ajustez la hauteur selon vos besoins
});

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Icône de menu */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', sm: 'none' }, mr: 2 }}
                    component={Link}
                    to="/">
                    <MenuIcon />
                </IconButton>

                {/* Logo / Image */}
                <Box sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Box component={Link} to="/" sx={{ display: 'inline-block' }}>
                        <Logo src="/logo.png" alt="Mon Logo" />
                    </Box>
                </Box>

                {/* Conteneur des boutons */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                    <Button color="inherit" component={Link} to="/carte">Carte</Button>
                    <Button color="inherit" component={Link} to="/blog">Blog</Button>
                    <Button color="inherit" component={Link} to="/gallery">Galerie</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                    <Button color="inherit" component={Link} to="/login">Connexion</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
