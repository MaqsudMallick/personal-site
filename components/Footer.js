import React from "react";
import Image from "next/dist/client/image";
const Footer = ()=>{

    return(
        <div className= "footer">
      <a target= "_blank" rel="noreferrer" href="https://shiny-made.github.io/"><img alt= "logo" src= "/bot.png" height= "50" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
      <a target= "_blank" rel="noreferrer" href="https://github.com/MaqsudMallick"><img alt= "github" src= "/github.png" height= "50" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
      <a target= "_blank" rel="noreferrer" href="#"><img src= "/twitter.png" height= "50" alt= "twitter" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
      <a target= "_blank" rel="noreferrer" href="#"><img src= "/facebook.png" height= "50" alt= "facebook" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
      <a target= "_blank" rel="noreferrer" href="mailto:maqsudmallick2.0@outlook.com"><img src= "/email.png" alt= "email" height= "50" width= "50" style= {{display: "inline-block", margin: "10px"}} /></a>
        
        
        <p style= {{display: "inline-block", float: "right", color: "white", margin: "20px 50px"}}>Maqsud Mallick Interactive Resume</p>
        
        </div>
    );
}

export default Footer;