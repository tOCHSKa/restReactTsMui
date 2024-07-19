import Bandeau from "../components/Bandeau";
import { Box, styled, Typography, Container, Button } from "@mui/material";

const StyledBoxTitle = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '2rem 0',
    flexDirection: 'column', // Default to column for xs and sm
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row', // Change to row for md and up
    },
}));
const StyledBoxTitleReverse = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '2rem 0',
    flexDirection: 'column-reverse', // Default to column for xs and sm
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row', // Change to row for md and up
    },
}));

const StyledImage = styled('img')(({ theme }) => ({
    height: 'auto',
    width: '60%',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
        height: '300px',
        width: '600px',
    },
    [theme.breakpoints.up('xs')]: {
        height: '300px',
        width: '300px',
    },
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
}));

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 0',
    margin: '16px'
});

const Carte = () => {
    return (
        <>
            <Bandeau
                title="DECOUVREZ NOTRE CARTE"
                subtitle="Vous faire partager les plaisirs d’une cuisine de chef, être irréprochable sur la qualité et l’authenticité des matières premières."
                extraText="Voilà nos Engagements… "
            />
            <Container maxWidth="lg" sx={{ maxWidth: '1200px' }}>
                <StyledBoxTitle>
                    <Box m={2} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h3" textAlign="center" sx={{ fontFamily: 'Italianno, cursive', marginBottom: '24px' }}>Antipasti à partager</Typography>
                        <Typography variant="body1" textAlign="center" sx={{ marginBottom: '24px' }}>Per iniziare una bella serata non c’é niente di meglio che condividere un antipasto in compagnia (anonimo)</Typography>
                        <Button variant="contained" href="#contained-buttons" sx={{ width: '50%', marginBottom: '24px' }}>Antipasti à partager</Button>
                    </Box>
                    <StyledBox>
                        <StyledImage src="/chef.jpg" alt="Image 1" />
                    </StyledBox>
                    <StyledBox>
                        <StyledImage src="/chef.jpg" alt="Image 1" />
                    </StyledBox>
                </StyledBoxTitle>
                <StyledBoxTitleReverse>
                    <StyledBox>
                        <StyledImage src="/chef.jpg" alt="Image 1" />
                    </StyledBox>
                    <StyledBox>
                        <StyledImage src="/chef.jpg" alt="Image 1" />
                    </StyledBox>
                    <Box m={2} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h3" textAlign="center" sx={{ fontFamily: 'Italianno, cursive', marginBottom: '24px' }}>Salades gourmandes</Typography>
                        <Typography variant="body1" textAlign="center" sx={{ marginBottom: '24px' }}>Non esiste un profumo più buono del pomodoro e basilico.
                            Sa di casa, di felicità, di condivisione.</Typography>
                        <Button variant="contained" href="#contained-buttons" sx={{ width: '50%', marginBottom: '24px' }}>Salades gourmandes</Button>
                    </Box>
                </StyledBoxTitleReverse>
            </Container>
        </>
    )
};

export default Carte;