import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Table from '../TableComponents/CategoryTable/CategoryTable';
import AddForm from '../FormComponents/AddForm/AddForm';
import EditForm from '../FormComponents/EditForm/EditForm';

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