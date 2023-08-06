import React from 'react'
import Navbar from '../components/Navbar'
import FooterAll from '../components/FooterAll'
import Himage2 from '../components/Himage2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <Himage2  heading = "ABOUT" text="Im a friendly Front-End Developer.." />
      <AboutContent />
      <FooterAll />
    </div>
  )
}

export default About
