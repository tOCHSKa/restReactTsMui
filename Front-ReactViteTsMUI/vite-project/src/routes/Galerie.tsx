import { Box, Container, styled, Typography } from "@mui/material";
import Bandeau from "../components/Bandeau";


const StyledImage = styled('img')(({ theme }) => ({
    height: 'auto',
    width: '100%',
    borderRadius: '4px',
    [theme.breakpoints.up('sm')]: {
        height: '300px',
        width: 'auto',
    },
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '3rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

const Galerie = () => {
    return (
        <>
        <Bandeau
        title="EN CE MOMENT"
        subtitle="Découvrez les créations du moment élaborées avec passion par notre chef. Chaque plat est une véritable célébration des saveurs italiennes authentiques, inspiré par les traditions culinaires de l'Italie et les produits les plus frais"
        extraText="La Selezione dello Chef"
        />
        <StyledContainer>
            <Box sx={{marginRight: { sm:'3rem'}}}>
                <Box sx={{display: 'flex', marginBottom: '3rem'}}>
                    <Box sx={{marginRight: '3rem'}}>
                    {/* photo1 */}
                    <StyledImage src="/img/galerie/photo1.jpg" alt="Image 1"></StyledImage>
                    </Box>
                    <Box>
                    {/* photo2 */}
                    <StyledImage src="/img/galerie/photo2.jpg" alt="Image 1"></StyledImage>
                    </Box>
                </Box>
                <Box>
                    {/* photo3 */}
                    <StyledImage src="/img/galerie/photo3.jpg" alt="Image 1"></StyledImage>
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography variant="h5" margin='1rem 0'>LA SÉLECTION DU CHEF</Typography>
                <Typography variant="subtitle1">Bella Stagionne</Typography>
                <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui doloremque id laborum maxime veritatis placeat in, autem recusandae beatae nemo sint laboriosam nihil perferendis porro nulla! Vel dolore cum repudiandae mollitia illo aspernatur recusandae. Similique quod enim suscipit quisquam modi et sint ad eius itaque necessitatibus, eos minima excepturi qui assumenda ducimus voluptates odit, hic asperiores culpa dolorum porro. Blanditiis quisquam, autem alias culpa in magni qui rem accusantium tenetur deleniti, illum, molestiae minus? Voluptates sequi assumenda nam exercitationem doloribus fugit corporis eveniet unde quasi libero vero voluptas atque, culpa sit earum, fuga corrupti autem commodi tempora? Ut, ipsam.</Typography>
            {/* text description */}
            </Box>
        </StyledContainer>
        </>
    );
};

export default Galerie;