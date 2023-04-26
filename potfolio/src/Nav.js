import React from 'react'
import logo from './img/rasta.avif'

const Nav = () => {
  return (
    <div className='nav'>
        <img src={logo} alt='logo' height='70px' width='80px' />
        <div className='links'>
            <a href='H'>Writings</a>
            <a href='H'>Talks</a>
            <a href='H'>Projects</a>
            <a href='H'>About</a>
        </div>
    </div>
  )
}

export default Nav