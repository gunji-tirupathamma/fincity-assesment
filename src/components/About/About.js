import React from 'react'
import {Link} from 'react-scroll'
import './About.css'

function About() {
  return (
    <div  id="about">
        
        <div className="topContent_container">
            <p className="para">UI/UX DESIGNER</p>
            <h1>Hello, my name is Madelyn Torff</h1>
            <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                                
            <Link to="projects" smooth={true} duration={500}>
                <button className="projectsButton">Projects</button>
            </Link>

            <button className='linkedinButton'>LinkedIn</button>
        </div>

       
      
    </div>
  )
}

export default About