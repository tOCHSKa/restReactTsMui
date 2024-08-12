import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FmdGood, MailOutline, PhoneAndroid } from '@mui/icons-material';
import { styled } from '@mui/system';
import Bandeau from '../components/Bandeau';

const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
    },
}));

interface IFrameProps {
    src: string;
    title: string;
}

// Styled component for iframe
const StyledIframe = styled('iframe')({
    border: 'none',
    width: '100%',
    height: '300px',
});

const IFrameComponent: React.FC<IFrameProps> = ({ src, title }) => {
    return (
        <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <StyledIframe src={src} title={title} />
        </Box>
    );
};

const StyledBox = styled(Box)({
    display: 'flex', 
    alignItems: 'center', 
    marginBottom: '1rem',
});

const Contact: React.FC = () => {
    return (
        <>
            <Bandeau
                title="NOUS-CONTACTER"
                subtitle="Si vous souhaitez nous faire part de vos retours, de vos idées ou pour toute autre demande, n'hésitez pas à nous contacter."
                extraText="Ti stiamo ascoltando"
            />
            <StyledContainer>
                <Box sx={{ margin: '3rem 0' }}>
                    <StyledBox>
                        <MailOutline sx={{ mr: 1 }} />
                        <Typography variant="body1">arthur99@lemoine.fr</Typography>
                    </StyledBox>
                    <StyledBox>
                        <PhoneAndroid sx={{ mr: 1 }} />
                        <Typography variant="body1">+33 6 95 95 95 95</Typography>
                    </StyledBox>
                    <StyledBox>
                        <FmdGood sx={{ mr: 1 }} />
                        <Typography variant="body1" sx={{textWrap: 'wrap'}}>53, avenue Pauline Brunel, 59333 Baixrou</Typography>
                    </StyledBox>
                </Box>
                <Box >
                    <Typography variant="h6">HORAIRES</Typography>
                    <Typography variant="body1">Lundi au dimanche</Typography>
                    <Typography variant="body1">11h30 - 14h30</Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>Samedi</Typography>
                    <Typography variant="body1">11h30 - 14h30 • 19h00 - 22h00</Typography>
                </Box>
                <Box sx={{  margin: '5.1rem 0' }}>
                    <IFrameComponent
                        src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=20%20rue%20des%20%C3%A9coles+(La%20FOSSETA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        title="Exemple d'Iframe"
                    />
                </Box>
            </StyledContainer>
        </>
    );
};

export default Contact;
