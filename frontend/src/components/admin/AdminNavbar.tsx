import { AdminPanelSettings, Mail } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material"
import { useState } from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: "white",
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '20%'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

const AdminNavbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>La FOSSETA</Typography>
        <AdminPanelSettings sx={{ display: { xs: 'block', sm: 'none' }, color: "white" }} />
        <Search><InputBase placeholder="Search..." /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} src="https://www.pexels.com/fr-fr/photo/femme-en-chemise-a-col-774909/" ></Avatar>
        </Icons>
        <UserBox>
          <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} src="https://www.pexels.com/fr-fr/photo/femme-en-chemise-a-col-774909/" ></Avatar>
          <Typography variant="body1">Kevin</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default AdminNavbar