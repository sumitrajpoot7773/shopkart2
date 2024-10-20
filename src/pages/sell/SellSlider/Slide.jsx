import React from 'react'
import  './Slide1.css'
import men1 from '../../../Assests/Slider2/men1.webp'
function Slide1() {
  return (
    <>
        <div className="page">
            <div className="img">
               <img src={men1} alt="" />
            </div>
        
         <div className="text">
          <h1>Raju Lunawath,Amazestore</h1>
          <p>Starting with just one category, their unwavering support and innovative platform empowered me to grow exponentially, expanding to six diverse categories and achieving an astounding 5x growth year on year.</p>
         </div>
         </div>
    </>
  )
}

export default Slide1