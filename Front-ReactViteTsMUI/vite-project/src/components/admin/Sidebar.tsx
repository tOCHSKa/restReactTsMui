import { AccountBox, Book, Mail, ModeNight, Person, Settings } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"

interface modeProps {
    mode: string;
    setMode: (value: string)=> void;
}
const Sidebar: React.FC<modeProps> = ({mode, setMode}) => {
    return (

        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Utilisateurs" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Book />
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Mail />
                        </ListItemIcon>
                        <ListItemText primary="Email" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Paramètres" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch onChange={e=>setMode(mode ==="light"? "dark" : "light")}/>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    )
}

export default Sidebar