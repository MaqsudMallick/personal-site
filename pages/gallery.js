import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { Card, CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import Footer from "../components/Footer";
const Gallery= ()=>{
    const arr= [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15];
    function imag(index){
     return ( <Card className= "cards" elevation="10"><CardMedia component="img" src= {`/image${index}.jpg`} alt={`gallery${index}`} width="150" height= "200" /> 
     
     <CardContent>Loreum Ipsum</CardContent>
     </Card>);
    }
    function iter(){

    }
    var i=0;
    return(
            <>
            <Navbar/>
                        {arr.map(imag)}
                        <Footer/>
            </>
        );
}

export default Gallery;