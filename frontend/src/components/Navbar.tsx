import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { MenuItem, Popover } from '@mui/material';
import { forwardRef, useState } from 'react';
import { theme } from './theme';

const Logo = styled('img')({
    height: 40, // Ajustez la hauteur selon vos besoins
});
// Créez un composant Link stylisé utilisant forwardRef
const StyledLink = forwardRef<HTMLAnchorElement, any>((props, ref) => (
    <Link ref={ref} {...props} />
));

const Navbar = () => {

    // Créez un composant MenuItem stylisé utilisant forwardRef
    const StyledMenuItem = styled(MenuItem)<{ component?: React.ElementType; to?: string }>({
        textDecoration: 'none',
        color: 'inherit',
        backgroundColor: theme.palette.primary.main
    });

    // Déclare un état local appelé anchorEl pour stocker l'élément d'ancrage du Popover
    // Le type de anchorEl est HTMLButtonElement ou null
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    // Déclare une fonction handleClick pour gérer les événements de clic sur le bouton
    // Elle prend un événement de type React.MouseEvent<HTMLButtonElement> comme argument
    // Elle met à jour l'état anchorEl avec l'élément cible de l'événement
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Déclare une fonction handleClose pour gérer la fermeture du Popover
    // Elle réinitialise l'état anchorEl à null
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Détermine si le Popover est ouvert en vérifiant si anchorEl n'est pas null
    const open = Boolean(anchorEl);
    // Détermine l'id du Popover en fonction de son état ouvert
    const id = open ? 'simple-popover' : undefined;

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <Box>
                        <StyledMenuItem onClick={handleClose} component={StyledLink} to="/">Accueil</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose} component={StyledLink} to="/carte">Carte</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose} component={StyledLink} to="/blog">Blog</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose} component={StyledLink} to="/galerie">Galerie</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose} component={StyledLink} to="/contact">Contact</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose} component={StyledLink} to="/connexion">Connexion</StyledMenuItem>
                    </Box>
                </Popover>
                <Box sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Box component={Link} to="/" sx={{ display: 'inline-block' }}>
                        <Logo src="/img/logo/logo.png" alt="Mon Logo" />
                    </Box>
                </Box>
                {/* Conteneur des boutons */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                    <Button color="inherit" component={Link} to="/carte">Carte</Button>
                    <Button color="inherit" component={Link} to="/blog">Blog</Button>
                    <Button color="inherit" component={Link} to="/galerie">Galerie</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                    <Button color="inherit" component={Link} to="/connexion">Connexion</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
