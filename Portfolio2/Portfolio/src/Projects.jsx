import React from 'react'
import donkeyro from './assets/Donkey-ro!.png'
import tshirt from './assets/T-shirt-creator.png'
import EarT from './assets/Ear-Crary-Train-er.png'
import weather from './assets/weather-app.png'
import website from './assets/website.png'
import Button from './Button'


const Projects = () => {
  return (<>
    <div className="background hero projects-container" id="projects">

    <div className="project-child">
        <img className ="project-img" src={donkeyro} alt="Donkey!" />
        <p className="project-p">
          <a href="https://donkey-ro.netlify.app/" target="_blank">Live </a>
 
           <a href="https://github.com/ValSantini/Donkey-ro" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-4">My first, light-hearted project that I developed because<br/>somebody once told me the world is gonna roll me<br/>and that<br/>I ain't the sharpest tool in the shed</p>
            <Button targetId="p-description-4" />

      <div className="project-child">
        <img className ="project-img" src={tshirt} alt="T-shirt" />
        <p className="project-p">
          <a href="https://t-shirt-customizer.netlify.app/" target="_blank">Live </a> 
           <a href="https://github.com/ValSantini/T-shirt-customizer-website" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-1">A project I developed studying Three JS.<br/>It requires an API Key for the AI.</p>
            <Button targetId="p-description-1" />

            <div className="project-child">
        <img className ="project-img" src={website} alt="website" />
        <p className="project-p">
          <a href="https://zinna-bank-mobile-website.netlify.app/" target="_blank">Live </a> 
           <a href="https://github.com/ValSantini/zinna-bank-mobile-website" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-5">A mobile-only bank website with an integrated investment calculator</p>
            <Button targetId="p-description-5" />

      <div className="project-child">
        <img className ="project-img" src={EarT} alt="EarT" />
        <p className="project-p">
          <a href="https://ear-crazy-train-er.netlify.app/" target="_blank">Live </a>
 
           <a href="https://github.com/ValSantini/Ear-Crazy-Train-er" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-2">I developed this project using React to help<br/>beginner musician to train their ear.<br/>(Important! - Browsers are no friends of audio projects, you may want to<br/>check your browser's settings in order to use it -<br/>or make your life easy and download it from the source.)</p>
            <Button targetId="p-description-2" />

      <div className="project-child">
        <img className ="project-img" src={weather} alt="Weather" />
        <p className="project-p">
          <a href="https://val-santini-weather-app.netlify.app/" target="_blank">Live </a>
 
           <a href="https://github.com/ValSantini/Weather-App" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-3">A project I developed studying API.<br/></p>
            <Button targetId="p-description-3" />
 
    </div>
    </>)
}

export default Projects
