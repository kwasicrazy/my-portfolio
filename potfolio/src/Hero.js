import React from 'react'
import logo1 from './img/hand.svg'
import logo3 from './img/apple.svg'
import logo2 from './img/rocket.svg'
import logo4 from './img/github.svg'
import logo5 from './img/linkedin.svg'
import logo8 from './img/youtube.svg'
import logo7 from './img/discord.svg'
import logo6 from './img/twitter.svg'


const Hero = () => {
  return (
    <div>
        <div className='about'>
        <h1>Hello<img src={logo1} alt='logo' height='40px' width='30px' /> I'm <span>SETH</span>!</h1>
        <h4>Low Code<img src={logo2} alt='logo' height='40h4x' width='30h4x' /> </h4>
        <h4>Dev Advocate<img src={logo3} alt='logo' height='40px' width='30px' /></h4>
        </div>
        <div className='socials'>
        <img src={logo4} alt='logo' height='60px' width='50px' />
        <img src={logo5} alt='logo' height='60px' width='50px' />
        <img src={logo8} alt='logo' height='60px' width='50px' />
        <img src={logo6} alt='logo' height='60px' width='50px' />
        <img src={logo7} alt='logo' height='60px' width='50px' />
        </div>
        <hr></hr>
    </div>
  )
}

export default Hero