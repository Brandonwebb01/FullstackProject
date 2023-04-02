import React from "react";
import { AppBar, Toolbar, Button} from "@material-ui/core";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" to="/Table">
            Categories
        </Button>
        <Button color="inherit" to="/items">
            Products
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;