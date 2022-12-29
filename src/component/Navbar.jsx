import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
const Navbar = () => {
  return (
    <AppBar position="relative">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Admin
          </Typography>
          <Avatar src="/broken-image.jpg" sx={{ m: 2, bgcolor: "orange" }}>
            HT
          </Avatar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
        </Toolbar>
      </div>
    </AppBar>
  );
};
export default Navbar;
