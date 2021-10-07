import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import About from "../components/About";
const AboutPage= ()=>{
    return(
        <>
        <Navbar/>
        <About />
        <Footer />

        </>
    )
}

export default AboutPage;