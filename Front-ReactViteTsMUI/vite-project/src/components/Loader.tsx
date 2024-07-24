import { Box, CircularProgress } from '@mui/material'
import  { useEffect, useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simuler un délai pour le chargement des composants
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Délai de 2 secondes pour simuler le chargement
  
      return () => clearTimeout(timer); // Nettoyage du timer
    }, []);
  
    return (
      <div>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            
          >
            <CircularProgress color='secondary' />
          </Box>
        ) : (
          <>
          </>
        )}
      </div>
    );
  };
  
  export default Loader;