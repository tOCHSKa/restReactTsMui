import { Box, ListItem, Typography } from "@mui/material"
import { theme } from "./theme"
import React, { ReactNode } from 'react';


// Définir le type des props pour StyledListItem
interface StyledListItemProps {
    children: ReactNode;
}

// Utiliser le type des props dans le composant StyledListItem
const StyledListItem: React.FC<StyledListItemProps> = ({ children }) => (
    <ListItem sx={{ listStyleType: 'none', marginBottom: 2 }}>
        <Typography variant="body1">{children}</Typography>
    </ListItem>
);

const Footer = () => {
    return (
        <Box component="ul" sx={{
            backgroundColor: theme.palette.secondary.main,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px'
        }}>
            {/* sx={{ padding: 0, margin: 0 }}> */}
            <StyledListItem>Contact</StyledListItem>
            <StyledListItem>Mentions Légales</StyledListItem>
            <StyledListItem>Conditions Générales D'utilisation</StyledListItem>
            <StyledListItem>Gestion des Cookies</StyledListItem>
        </Box>
        
    )
}

export default Footer