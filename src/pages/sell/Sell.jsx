import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../Footer/Footer.jsx'
import  './Sell.css';

import one from '../../Assests/SellsImage/one.svg'
import two from '../../Assests/SellsImage/two.svg'
import three from '../../Assests/SellsImage/three.svg'
import four from '../../Assests/SellsImage/four.svg'
import five from '../../Assests/SellsImage/five.svg'
import Slider from './SellSlider/Slider';
function Sell() {
  return (
    <div>
      <Header />
      <div className="seller-page">
        <div className="upperside">
        <section className='section1'>
               <h1>Sell Online with Shopkart</h1>

               <div className="user">
                  <div className="one">
                    <img src={one} alt="" />
                    <p>45 crore+ Flipkart customers</p>
                  </div>
                  <div className="two">
                  <img src={two} alt="" />
                  <p>7* days secure & regular payments</p>
                  </div>
                  <div className="three">
                  <img src={three} alt="" />
                  <p>Low cost of doing business</p>
                  </div>
                  <div className="four">
                  <img src={four} alt="" />
                  <p>One click Seller Support</p>
                  </div>
                  <div className="five">
                  <img src={five} alt="" />
                  <p>Access to The Big Billion Days & more</p>
                  </div>
               </div>
        </section>
        </div>
      

        <section className='section2'>
          <h1 className='h1'> <span>Seller Success</span> Stories</h1>
           <Slider />
           
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Sell;








// <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/shopping-bag-icon.svg" alt="Access to The Big Billion Days &amp; more icon" class="styles__KeyImage-sc-o5uywd-6 ecIVyp"></img>


// <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/seller-support-icon.svg" alt="One click Seller Support icon" class="styles__KeyImage-sc-o5uywd-6 ecIVyp"></img>


// <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/low-cost-icon.svg" alt="Low cost of doing business icon" class="styles__KeyImage-sc-o5uywd-6 ecIVyp"></img>


// <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/wallet-icon.svg" alt="7* days secure &amp; regular payments icon" class="styles__KeyImage-sc-o5uywd-6 ecIVyp"></img>


// <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/crore_users_revamp.svg" alt="50 Crore users icon" class="styles__KeyImage-sc-o5uywd-6 ecIVyp"></img>