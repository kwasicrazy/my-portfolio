import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import Footer from './Footer'

const Container = () => {
  return (
    <div className='container'>
        <Nav />
        <Hero />
        <Footer />
    </div>
  )
}

export default Container