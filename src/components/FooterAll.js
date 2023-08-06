import React from 'react'
import "./footer.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'


const FooterAll = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                <div>
                    <p>115 Lokmanya Socity</p>
                    <p>Mumbai</p>
                </div>
            </div>
            <div className='phone'>
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
            9838460593</h4>
            </div>

            <div className='email'>
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
            divyvmishra@gmail.com</h4>
            </div>
        </div>

        <div className='right'>
            <h4>About the company</h4>
            <p>This is me fahimul kabir.CEO &
                founder of tech2etc. I enjoy discussing
                new projects and design challenges
            </p>
            <div className='social'>
            
            <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}} />
            <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}} />
            <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}} />
            </div>
        </div>
    </div>
  
</div>
  )
}

export default FooterAll
