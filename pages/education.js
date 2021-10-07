import React from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
const Education = () =>{
    return(<>
        <Navbar />
        <List image="/image2.png" content= "BE from Jadavpur University" />
        <List image="/image3.png" content= "10+2 from Delhi Public School, Ruby Park" />

    </>);
}
export default Education;
