import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import  Link from 'next/link';
const Navbar = () => {
  return (
    <AppBar position="static" color= "primary">
      <Toolbar>
          <ButtonGroup>
              <Link href="/" >
        <Button size= "large" variant= "contained" color= "primary">Home</Button>
        </Link>
        <Link href="/education">
        <Button size= "large" variant= "contained" color= "primary">Education</Button>
        </Link>
        <Link href="/gallery">
        <Button size= "large" variant= "contained" color= "primary">Gallery</Button>
        </Link>
        <Link href="/projects">
        <Button size= "large" variant= "contained" color= "primary">Projects</Button>
        </Link>
        <Link href="/about">
        <Button size= "large" variant= "contained" color= "primary">About</Button>
        </Link>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;