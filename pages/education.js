import React from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import Footer from "../components/Footer";
const Education = () =>{
    return(<>
        <Navbar />
        <List image="/image2.png" content= "BE from Jadavpur University" />
        <List image="/image3.png" content= "+2 from Delhi Public School, Ruby Park" />
        <List image="/image1.png" content= "10 from St Thomas Day School" />
        <Footer/>
    </>);
}
export default Education;
