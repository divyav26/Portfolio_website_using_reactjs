import React from 'react'
import "./Contact.css";

const ContactFrom = () => {
  return (
    <div className='form'>
        <form>
      <label>Your Name:</label>
      <input type='text'/>

      <label>Email:</label>
      <input type='text'/>

      <label>Subject: </label>
      <input type='text'/>

      <label>Message: </label>
      <textarea rows="6" placeholder='Type your message here'/>
      <button className='btn'>Submit</button>
      </form>
    </div>
    
  )
}

export default ContactFrom
