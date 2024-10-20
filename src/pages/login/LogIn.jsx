import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../Footer/Footer'
import './Login.css'


function LogIn() {
  return (
    <div>
       <Header />
       <center>
           <div className="login-page">
            <div className="login-details">
              <h1>LogIn</h1>
              <p>Get access to your Orders, <br /> Wishlist and Recommendations</p>
               
            </div>
             <form className='form'>
             <input type="text" placeholder="Enter Email" />
             <input type="password" placeholder="Enter Password" />
         
             <input type="submit" value="LogIn" />
             <p>By continuing, you agree to Shopkart's Terms of Use and Privacy Policy.</p>
             <p>New to Shopkart?</p>
             </form>
           </div>
           <Footer  />
           </center>
          
    </div>
  )
}

export default LogIn