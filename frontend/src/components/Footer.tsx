import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: theme.spacing(5),
}));

const FooterButton = styled(Button)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    fontFamily: '"Montserrat", sans-serif',
    color: theme.palette.text.primary,
    '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
    },
}));

interface FooterProps {
    // Ici tu pourra ajouter si tu add des props au component plus tard les types des props reçus
}

const Footer: React.FC<FooterProps> = () => (
    <FooterContainer component="footer">
        <FooterButton>Contact</FooterButton>
        <FooterButton>Mentions Légales</FooterButton>
        <FooterButton>Conditions</FooterButton>
        <FooterButton>Gestion des Cookies</FooterButton>
    </FooterContainer>
);

export default Footer;