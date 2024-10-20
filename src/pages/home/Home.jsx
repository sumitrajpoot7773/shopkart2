import React from 'react'
import Header from '../../components/header/Header'
import Slide from '../../components/Slider/Slide'
import Card from './Card'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div>
      
        <Header  />
        <Slide />
        <Card />
        <Footer />
      </div>
  )
}

export default Home