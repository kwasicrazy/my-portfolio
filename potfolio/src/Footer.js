import React from 'react'
import logo from './img/love.svg'

const Footer = () => {
  return (
    <div className='footer-text'>
        <h4>Made with<img src={logo}  alt='logo' height='40px' width='50px'/></h4>
    </div>
  )
}

export default Footer