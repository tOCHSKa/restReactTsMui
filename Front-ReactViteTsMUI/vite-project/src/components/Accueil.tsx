import { Box, Card, CardActionArea, CardContent, CardMedia, styled, Typography } from '@mui/material';
import React from 'react';
import { theme } from "./theme"


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

const Accueil: React.FC = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: theme.palette.secondary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image src="/herobanner.png" alt="Accueil" />
                <Typography variant='h6' sx={{ paddingTop: theme.spacing(5), textAlign: 'center', mb: '40px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.
                </Typography>
                <Typography variant='h2' pb={5} sx={{ fontFamily: 'Italianno, cursive', paddingBottom: theme.spacing(5), textAlign: 'center' }}>
                    This is Italianno Font
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: { xs: '0', sm: '2rem 0' }
            }}>
                <Box>
                    <Typography variant="h6" p={5} textAlign="center">DECOUVREZ LA SELECTION DU CHEF</Typography>
                </Box>
                <Box>
                    <StyledImage src="/chef.jpg" alt="Image 1" />
                </Box>
            </Box>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default Accueil;

