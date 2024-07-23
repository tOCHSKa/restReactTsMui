import { Box, Stack } from "@mui/material"
import AdminNavbar from "../components/admin/AdminNavbar"
import Feed from "../components/admin/Feed"
import Sidebar from "../components/admin/Sidebar"

const Admin = () => {
    return (
        <Box>
            <AdminNavbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Feed />
            </Stack>
        </Box>
    )
}

export default Admin