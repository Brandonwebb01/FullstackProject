import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//sets up links to the categories and items pages
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