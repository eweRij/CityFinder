import {
  Box,
} from "@mui/material";

const Sidebar = ({children}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRight: "1px solid rgb(229, 231, 235)",
      padding: "32px 24px 32px 80px",
      height: "100vh",
    }}
  >
   {children}
  </Box>
);

export default Sidebar;
