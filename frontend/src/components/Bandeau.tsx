import React from 'react'
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";



const BandeauContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(5),
}));

interface BandeauProps {
    title: string;
    subtitle: string;
    extraText: string;
}

const Bandeau: React.FC<BandeauProps> = ({ title, subtitle, extraText }) => {
    return (
        <BandeauContainer>
            <Typography variant="h3" textAlign="center" sx={{marginBottom: '1rem'}}>{title}</Typography>
            <Typography variant="body1" textAlign="center">{subtitle}</Typography>
            <Typography variant='h2' sx={{ fontFamily: 'Italianno, cursive', textAlign: 'center' }}>
                {extraText}
            </Typography>
        </BandeauContainer>
    );
}

export default Bandeau