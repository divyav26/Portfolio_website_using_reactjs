import React from 'react'
import Navbar from '../components/Navbar'
import FooterAll from '../components/FooterAll'
import Himage2 from '../components/Himage2'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Himage2 heading = "PROJECTS" text="some of my most recent works.." />
      <Work />
      <FooterAll />
      
    </div>
  )
}

export default Projects
