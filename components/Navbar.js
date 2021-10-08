import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import  Link from 'next/link';
import Image from 'next/image';
import { IconButton } from '@mui/material';




import { CssBaseline } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color= "success">
      <CssBaseline />
      {/*   */}
      <Toolbar>
          {/* <ButtonGroup>
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
         */}
         
         <div className="navlinks">
         <div className= "nav-nav">
         <Link href="/"  passHref>
        Home  
        </Link>
        </div>
        <div className= "nav-nav nav-1">
        <Link href="/education" passHref>
        Education 
        </Link>
        </div>
        <div className= "nav-nav nav-2">
        <Link href="/gallery" passHref>
        Gallery 
        </Link>
        </div>
        <div className= "nav-nav nav-3">
        <Link href="/projects" passHref>
        Projects 
        </Link>
        </div>
        <div className= "nav-nav nav-4">
        <Link href="/about" passHref>
        About
        </Link>
        </div>
         </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;