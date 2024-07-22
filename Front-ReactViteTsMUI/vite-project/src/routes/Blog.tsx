import { Box, Container, Grid, Typography } from "@mui/material";
import Bandeau from "../components/Bandeau";
import { styled } from "@mui/system";
import { theme } from "../components/theme";
import SelectComponant from "../components/SelectComponent";

const StyledBoxTitle = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column', // Default flexDirection
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row', // flexDirection for sm and up
        margin: '4rem 0',
    },
}));

const StyledImage = styled('img')(({ theme }) => ({
    height: 'auto',
    width: '91%',
    borderRadius: '4px',
    [theme.breakpoints.up('sm')]: {
        height: '300px',
        width: 'auto',
    },
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}));

const StyledImageGrid = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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


const Blog = () => {
    return (
        <>
            <Bandeau
                title="ACTUALITES"
                subtitle="Suivez nos actualités, et apprenez-en plus sur l’Italie;
            son style de vie, ses recettes, ses traditions, mais aussi son patrimoine,
            sa culture et sa richesse gastronomique."
                extraText="Sogni gastronomici e culturali"
            />
            <Container maxWidth="lg" sx={{ maxWidth: '1200px' }}>
                <StyledBoxTitle>
                    <Box>
                        <Typography variant="h6" p={5} textAlign="center">DECOUVREZ LA SELECTION DU CHEF</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 0' }}>
                        <StyledImage src="/img/blog/blog.jpg" alt="Image 1" />
                    </Box>
                </StyledBoxTitle>
            </Container>
            <Box sx={{ background: theme.palette.info.main }}>
                <Typography variant='h2' pb={5} sx={{ fontFamily: 'Italianno, cursive', padding: theme.spacing(3), textAlign: 'center', color: "black" }}>
                    Les derniers articles
                </Typography>
            </Box>
            <Container maxWidth="lg" sx={{ maxWidth: '1200px' }}>
                <SelectComponant />
                <Box sx={{ flexGrow: 1, margin: '2rem 0' }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/img/blog/photo1.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/img/blog/photo2.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/img/blog/photo3.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/img/blog/photo3.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/img/blog/photo1.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/img/blog/photo2.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/img/blog/photo3.jpg" alt="Image 1" />
                                <CenteredBox>
                                    <Typography variant="h5">La carte</Typography>
                                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.</Typography>
                                </CenteredBox>
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <ImageContainer>
                                <StyledImageGrid src="/img/blog/photo3.jpg" alt="Image 1" />
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

export default Blog;