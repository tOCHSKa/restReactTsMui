import { Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { theme } from "../components/theme"
import Paper from '@mui/material/Paper';

const Image = styled('img')({
    height: '74%',
    width: '100%',
    maxHeight: '70vh'
});

const StyledImage = styled('img')(({ theme }) => ({
    height: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        height: '300px',
        width: 'auto',
    },
}));

const StyledBoxBanner = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

const StyledBoxTitle = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column', // Default flexDirection
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row', // flexDirection for sm and up
        padding: '2rem 0',
    },
}));

const StyledBoxMenu = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
})

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const images = [
    { src: '/accueil.jpg', alt: 'Image 1' },
    { src: '/accueil.jpg', alt: 'Image 2' },
    { src: '/accueil.jpg', alt: 'Image 3' },
    { src: '/accueil.jpg', alt: 'Image 4' },
];

// Composant pour styliser les images
const StyledGrid = styled('img')({
    width: '100%',
    // marginTop: 8,
    verticalAlign: 'middle',
});

const Accueil: React.FC = () => {
    return (
        <>
            <StyledBoxBanner sx={{
            }}>
                <Image src="/herobanner.png" alt="Accueil" />
                <Typography variant='h6' sx={{ paddingTop: theme.spacing(5), textAlign: 'center', mb: '40px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.
                </Typography>
                <Typography variant='h2' pb={5} sx={{ fontFamily: 'Italianno, cursive', paddingBottom: theme.spacing(5), textAlign: 'center' }}>
                    This is Italianno Font
                </Typography>
            </StyledBoxBanner>
            <StyledBoxTitle>
                <Box>
                    <Typography variant="h6" p={5} textAlign="center">DECOUVREZ LA SELECTION DU CHEF</Typography>
                </Box>
                <Box>
                    <StyledImage src="/chef.jpg" alt="Image 1" />
                </Box>
            </StyledBoxTitle>
            <Box sx={{ flexGrow: 1, padding: '0 2rem' }}>
                <Grid container spacing={2}>
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <StyledGrid src={image.src} alt={image.alt} />
                            <Typography variant="h6" sx={{ textAlign: 'center', mt: 1 }}>Title</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>Text Description</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Accueil;
