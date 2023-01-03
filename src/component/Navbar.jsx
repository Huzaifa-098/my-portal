import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import { Button } from "@mui/material";
const Navbar = (onClick) => {
  const handleClick = () => {
    console.log("hello,huzaifa");
  };
  return (
    <AppBar position="relative" style={{ backgroundColor: "white" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Toolbar>
          <Typography variant="h6" color="orange" noWrap></Typography>
          {/* <button onClick={handleClick}>click</button> */}
          <div className="container">
            <Avatar
              href="/log"
              onClick={handleClick}
              src="/broken-image.jpg"
              sx={{ m: 2, bgcolor: "orange", cursor: "pointer" }}
            >
              HT
            </Avatar>
            <div className="overlay">
              <div className="text">
                <Button
                  className="btn mt-3"
                  style={{ backgroundColor: "green" }}
                  href="/log"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>

          {/* <Link to="/tab"></Link> */}
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
        </Toolbar>
      </div>
    </AppBar>
  );
};
export default Navbar;
