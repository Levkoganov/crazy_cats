import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Button
              color="inherit"
              size="large"
              onClick={() => {
                navigate("/");
              }}
            >
              <Box sx={{ display: "flex" }}>
                <PetsIcon />
                Crazy Cats
              </Box>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
