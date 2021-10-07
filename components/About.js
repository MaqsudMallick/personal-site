import React from "react";

const About= ()=>{
    return(
        <div className= "about">
        <div className= "aboutme">
        <p style= {{color: "green", fontWeight: "800", fontSize: "20px"}}>About Me</p>
            <p>I am one of the hundreds of CSE guys you would find anywhere in the morning. At night I am a self driven content creator.</p>
        </div>
        <img alt="" src= "/maqsud.jpeg" className= "profile" height= "200" width= "180" />
        <div className="details">
        <p style= {{color: "green", fontWeight: "800", fontSize: "20px"}}>Details</p>
        <p><strong>Name:</strong><br/>Maqsud Mallick</p>
        <p><strong>Age:</strong><br />19 years</p>
        <p><strong>Nationality:</strong><br />Indian</p>
        </div>
        
        </div>
    );
}
export default About;