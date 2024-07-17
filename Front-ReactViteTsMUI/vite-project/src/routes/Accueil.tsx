import { Box, Grid, styled, Typography, Paper, Container } from '@mui/material';
import React from 'react';
import { theme } from "../components/theme"


const Image = styled('img')({
    height: '74%',
    width: '100%',
    maxHeight: '70vh'
});

const StyledImage = styled('img')(({ theme }) => ({
    height: 'auto',
    width: '91%',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2rem 0',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row', // flexDirection for sm and up
        margin: '2rem 0',
    },
}));

const images = [
    { id: '1', title: 'Image 1', src: "/photo1.jpg" },
    { id: '2', title: 'Image 2', src: "/photo2.jpg" },
    { id: '3', title: 'Image 3', src: "/photo3.jpg" },
    { id: '4', title: 'Image 4', src: "/photo4.jpg" },
    { id: '5', title: 'Image 5', src: "/photo5.jpg" },
    { id: '6', title: 'Image 6', src: "" },
];

const StyledImageGrid = styled('img')({
    width: '100%',
    height: '100%'
});

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
}));


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
            <Container maxWidth="lg" sx={{ maxWidth: '1200px' }}>
                <StyledBoxTitle>
                    <Box>
                        <Typography variant="h6" p={5} textAlign="center">DECOUVREZ LA SELECTION DU CHEF</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 0' }}>
                        <StyledImage src="/chef.jpg" alt="Image 1" />
                    </Box>
                </StyledBoxTitle>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Item><StyledImageGrid src="/photo1.jpg" alt="Image 1" /></Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Item><StyledImageGrid src="/photo2.jpg" alt="Image 1" /></Item>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, margin: '2rem 0' }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <Item><StyledImageGrid src="/photo1.jpg" alt="Image 1" /></Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <Item><StyledImageGrid src="/photo2.jpg" alt="Image 1" /></Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <Item><StyledImageGrid src="/photo3.jpg" alt="Image 1" /></Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <Item><StyledImageGrid src="/photo3.jpg" alt="Image 1" /></Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </>
    );
};

export default Accueil;