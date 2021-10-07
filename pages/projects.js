import React from "react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Projects=()=>{
    return(
        <>
            <Navbar />
            <Cards image="/rpc.jpg" link= "https://github.com/MaqsudMallick/rock-paper-scissors-app/" name= "Stone Paper Scissors App"/>
            <Cards image="/todo.JPG" link= "https://github.com/MaqsudMallick/to-do-app" name= "To-Do App" />
            <Cards image= "/bot.png" link= "https://github.com/MaqsudMallick/Blog_Updates_Discord_bot" name= "Blogger's Updates Bot"/>
            <Cards image="/calculator.jpg" link= "https://github.com/MaqsudMallick/calculator-app" name= "Multi-theme Calculator" />
            <Cards image= "/keeper.jpg" link= "https://github.com/MaqsudMallick/Note-keeper-app" name= "Note Keeper App" />
            <Cards image= "/simon.jpg" link= "https://github.com/MaqsudMallick/simon-game" name= "Simon Game" />
            <Cards image= "/blog.jpg" link= "https://shiny-made.github.io/" name= "Shiny-Made Blog" />
            <Footer/>
        </>
    );
}

export default Projects;