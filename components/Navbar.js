import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import  Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <AppBar position="static" color= "success">
      <Toolbar>
          <ButtonGroup>
              <Link href="/"  passHref>
        <Button size= "large" variant= "contained" color= "primary">Home</Button>
        </Link>
        <Link href="/education" passHref>
        <Button size= "large" variant= "contained" color= "primary">Education</Button>
        </Link>
        <Link href="/gallery" passHref>
        <Button size= "large" variant= "contained" color= "primary">Gallery</Button>
        </Link>
        <Link href="/projects" passHref>
        <Button size= "large" variant= "contained" color= "primary">Projects</Button>
        </Link>
        <Link href="/about" passHref>
        <Button size= "large" variant= "contained" color= "primary">About</Button>
        </Link>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;