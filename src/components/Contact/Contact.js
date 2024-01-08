import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@mui/material'
import { LinkedIn, Mail,Instagram } from '@mui/icons-material';
import CircleOf from '../../copyright/c-circle.svg'


import './Contact.css'

const  Contact=()=> {
  return (
    <Element id="contact" className='contact_container'>
            <h1>Contact</h1>                    

            <div className='contactIcons'>
                <a href="">
                    <IconButton>
                        <Instagram className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="">
                    <IconButton>
                        <LinkedIn className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="">
                    <IconButton>
                        <Mail className='iconSize' />                        
                    </IconButton>
                </a>
                
            </div>
            <p className='copyright'>Copyright   <img src={CircleOf} className='circle-c'/>
                        
                                     2024. All rights served
            </p>

            <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1704431772/Vector_adwan0.png" alt="" className='img'/>
        

    </Element>
  )
}

export default Contact