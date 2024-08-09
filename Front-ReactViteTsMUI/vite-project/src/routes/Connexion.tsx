import { Box, Container, Typography } from '@mui/material';
// import Login from '../components/login/Login';
import Bandeau from '../components/Bandeau';
import Signin from '../components/login/Signin';

const Connexion = () => {
    return (
        <>
            <Bandeau
                title="Bienvenue à La Fosseta !"
                subtitle="Accédez à votre compte, explorez nos offres spéciales, et bien plus encore. Pas encore membre ? Inscrivez-vous dès maintenant !"
                extraText="Benvenuto in Italia"
            />
            <Container sx={{ width: '600px', marginBottom: '5.5rem' }}>
                <Box>
                    <Typography variant='h4' textAlign={'center'} margin={5}>FORMULAIRE DE CONNEXION</Typography>
                    <Signin />
                </Box>
            </Container>
        </>
    );
};

export default Connexion;