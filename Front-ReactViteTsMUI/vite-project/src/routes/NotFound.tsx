import { Box, Container, styled } from '@mui/material'
import Bandeau from '../components/Bandeau'

const NotFound = () => {

  const StyledImg = styled('img')({
    height: '90%',
  });
  const StyledBox = styled('div')({
    display: 'flex',
    justifyContent: "center"
  });

  return (
    <>
    <Bandeau
      title="SOMETHING GOES WRONG"
      subtitle="Il semblerait que cette page n'existe pas, vous allez être redirigé dans un instant"
      extraText="Tadddddddam"
    />
    <StyledBox sx={{height: '40vh'}}>
      <StyledImg src="https://gyromech.com/wp-content/uploads/2021/04/titre404.png"></StyledImg>
    </StyledBox>
    </>
  )
}

export default NotFound