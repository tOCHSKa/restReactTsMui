import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Logo = styled('img')({
    height: 40, // Ajustez la hauteur selon vos besoins
});

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Icone de menu */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', sm: 'none' }, mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Logo / Image */}
                <Box sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Logo src="/logo.png" alt="Mon Logo" />
                </Box>

                {/* Conteneur des boutons */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                    <Button color="inherit">Carte</Button>
                    <Button color="inherit">Blog</Button>
                    <Button color="inherit">Galerie</Button>
                    <Button color="inherit">Contact</Button>
                    <Button color="inherit">Connexion</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
