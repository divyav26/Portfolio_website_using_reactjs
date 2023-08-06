import React from 'react'
import Navbar from '../components/Navbar'
import FooterAll from '../components/FooterAll'
import Himage2 from '../components/Himage2'
import ContactFrom from '../components/ContactFrom'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Himage2 heading = "CONTACTUS" text="Lets have a chat.." />
      <ContactFrom />
      <FooterAll />
    </div>
  )
}

export default Contact
