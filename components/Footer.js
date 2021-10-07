import React from "react";
import Image from "next/dist/client/image";
const Footer = ()=>{

    return(
        <div className= "footer">
      <a target= "_blank" href="https://shiny-made.github.io/"><img src= "/bot.png" height= "50" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
      <a target= "_blank" href="https://github.com/MaqsudMallick"><img src= "/github.png" height= "50" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
      <a target= "_blank" href="#"><img src= "/twitter.png" height= "50" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
      <a target= "_blank" href="#"><img src= "/facebook.png" height= "50" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
      <a target= "_blank" href="mailto:maqsudmallick2.0@outlook.com"><img src= "/email.png" height= "50" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
        
        
        <p style= {{display: "inline-block", float: "right", color: "white", margin: "20px 50px"}}>Maqsud Mallick Interactive Resume</p>
        
        </div>
    );
}

export default Footer;