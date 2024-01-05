import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@mui/material'
import { LinkedIn,GitHub,Facebook,Mail } from '@mui/icons-material'

import './Contact.css'

const  Contact=()=> {
  return (
    <Element id="contact" className='contact_container'>
            <h1>Contact</h1>                    

            <div className='contactIcons'>
                <a href="https://www.linkedin.com/in/gunji-tirupathamma-434b31252/">
                    <IconButton>
                        <LinkedIn className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/gunji.tirupathamma">
                    <IconButton>
                        <Facebook className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://github.com/gunji-tirupathamma">
                    <IconButton>
                        <GitHub className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="">
                    <IconButton>
                        <Mail className='iconSize' />                        
                    </IconButton>
                </a>
            </div>
            <p className='copyright'>Copyright   
                        
                                     2024. All rights served
            </p>
        

    </Element>
  )
}

export default Contact