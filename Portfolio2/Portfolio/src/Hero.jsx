import React, { useState } from 'react';
import IronMan from './assets/iron_man.mp3';
import ironManImage from './assets/iron_man_project.jpg';
import jarvisGif from './assets/Jarvis.gif'; 
const Hero = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(jarvisGif); 

  const handleNameClick = () => {
    const audio = new Audio(IronMan);
    audio.play();
    setShowParagraph(true);
    setBackgroundImage(ironManImage);
  };

  return (<>
    <div className="background-image hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-container">
        <h1 className="name" onClick={handleNameClick}>
          <span>Val <br /> Santini</span>
        </h1>
        <p className="p-hero">(Click the name...)</p>
        <p className="p-hero1" style={{ display: showParagraph ? 'block' : 'none', color: 'red' }}>
          Now you can't stop Iron Man 🤖
        </p>
      </div>
    </div>
 </> );
};

export default Hero;
