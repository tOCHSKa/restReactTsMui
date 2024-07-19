import { Box, Grid, styled, Typography, Container } from '@mui/material';
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
    borderRadius: '4px',
    [theme.breakpoints.up('sm')]: {
        height: '300px',
        width: 'auto',
    },
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
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
        margin: '4rem 0',
    },
}));


const StyledImageGrid = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
});

const ImageContainer = styled(Box)({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const CenteredBox = styled(Box)({
    position: 'absolute',
    width: '100%',
    height: '100%', // Take the full height of the parent container
    top: '0', // Align to the top of the container
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '1rem',
    boxSizing: 'border-box', // Ensure padding does not overflow the container
    wordWrap: 'break-word',
    borderRadius: '4px'
});

const Accueil: React.FC = () => {
    return (
        <>
            <StyledBoxBanner sx={{
            }}>
                <Image src="/herobanner.png" alt="Accueil" />
                <Typography variant='h6' sx={{ paddingTop: theme.spacing(5), textAlign: 'center', mb: '40px', width: '70%' }}>
                    La FOSSETA vous invite à un savoureux voyage au coeur de l’Italie authentique.
                    Goûtez les trésors gustatifs de la cuisine italienne traditionnelle au sein d’une ambiance contemporaine…
                </Typography>
                <Typography variant='h2' pb={5} sx={{ fontFamily: 'Italianno, cursive', paddingBottom: theme.spacing(5), textAlign: 'center' }}>
                    Buon Viaggio
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
                            <ImageContainer>
                                <StyledImageGrid src="/photo1.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <ImageContainer>
                                <StyledImageGrid src="/photo3.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, margin: '4rem 0' }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/photo1.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/photo2.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/photo3.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/photo3.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Accueil;