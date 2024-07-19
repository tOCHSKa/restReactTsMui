import { Box, Container, Typography } from '@mui/material';
import Login from '../components/Login';
import Bandeau from '../components/Bandeau';

const Connexion = () => {
    return (
        <>
            <Bandeau
                title="Bienvenue à La Fosseta !"
                subtitle="Accédez à votre compte, explorez nos offres spéciales, et bien plus encore. Pas encore membre ? Inscrivez-vous dès maintenant !"
                extraText="Benvenuto in Italia"
            />
            <Container sx={{ width: '600px', marginBottom: '3rem' }}>
                <Box>
                    <Typography variant='h4' textAlign={'center'} margin={5}>FORMULAIRE DE CONNEXION</Typography>
                    <Login />
                </Box>
            </Container>
        </>
    );
};

export default Connexion;