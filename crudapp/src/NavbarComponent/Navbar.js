import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/Categories">
            Categories
        </Button>
        <Button color="inherit" component={Link} to="/Items">
            Items
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;