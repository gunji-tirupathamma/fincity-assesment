import React from 'react'
import {Link} from 'react-scroll'
import './About.css'

function About() {
  return (
    <div className='topContent' id="about">
        <img src="https://res.cloudinary.com/dsx3dj12i/image/upload/v1684305659/IMG_20221007_171815_1_gpzx0e.jpg" alt="" className="image"/>
        <div className="topContent_container">
            <h1>Tirupathamma Gunji</h1>
            <p>A Web and App Developer</p>
          
            <button className='linkedinButton'>LinkedIn</button>
           
            <Link to="projects" smooth={true} duration={500}>
                <button className="projectsButton">Projects</button>
            </Link>
        </div>
      
    </div>
  )
}

export default About