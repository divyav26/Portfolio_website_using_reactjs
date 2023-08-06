import './HimgStyle.css';

import React from 'react'
import IntroImg from "../asserts/1.jpeg"
import { Link } from 'react-router-dom';

const Himg = () => {
  return (
    
      <div className='hero'>
        <div className='mask'>
          <img className='into-img' src={IntroImg} alt='IntroImg' />
        </div>

        <div className='content'>
          <p>HI, I'M A FREEELANCER</p>
          <h1>FULL STACK DEVELOPER</h1>
          <div>
            <Link to='/projects' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
          </div> 
        </div>

      </div>
    
  )
}

export default Himg
