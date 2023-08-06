import { Link } from "react-router-dom"
import "./AboutStyle.css"
import pic from "../asserts/py1.jpg"
import pic2 from "../asserts/py2.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who I Am</h1>
            <p>Im a fullstack developer, I create responsive <br /> secure website for my clients </p>
            <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pic} className="img" alt="true" />
                </div>

                <div className="img-stack buttom">
                    <img src={pic2} className="img" alt="true" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
