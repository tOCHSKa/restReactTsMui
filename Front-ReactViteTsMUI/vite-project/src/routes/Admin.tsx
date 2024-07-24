import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider, PaletteMode } from '@mui/material';
import AdminNavbar from '../components/admin/AdminNavbar';
import Feed from '../components/admin/Feed';
import Sidebar from '../components/admin/Sidebar';
import Rightbar from '../components/admin/Rightbar';
import Add from '../components/admin/Add';

const Admin: React.FC = () => {
    const [mode, setMode] = useState<PaletteMode>('light');
    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor="background.default" color="text.primary">
                <AdminNavbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    );
};

export default Admin;
