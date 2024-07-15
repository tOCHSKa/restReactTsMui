import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import {theme} from "./theme"


const Image = styled('img')({
    height: '74vh',
    width: '100%'
});

const Accueil: React.FC = () => {
    return (
            <Box sx={{ backgroundColor: theme.palette.secondary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
             }}>
                <Image src="/herobanner.png" alt="Accueil" />
                <Typography variant='h6' sx={{paddingTop: theme.spacing(5)}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non.
                </Typography>
                <Typography variant='h2' pb={5} sx={{ fontFamily: 'Italianno, cursive',paddingBottom: theme.spacing(5)}}>
                    This is Italianno Font
                </Typography>
            </Box>
    );
};

export default Accueil;
