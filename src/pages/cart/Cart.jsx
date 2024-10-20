import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Footer from "../../pages/Footer/Footer.jsx";
import NoteContext from "../../context/NoteContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { BsCaretRight } from "react-icons/bs";
function Cart() {
 
  let data = useContext(NoteContext);
  return (
    <div>
      <Header />
      <center>
        
        {data.toggle ? (
          data.productCartItem.map((e) => (
            <section className="sec">
              <div className="productsection">
                <div className="product-images">
                  <Link to={'/display'} onClick={()=>{data.DisplayData(e)}}>
                  <img src={e.images[0]} alt="" />
                  </Link>
                  <div className="quantity">
                    <button
                      className="minusbtn"
                      onClick={() => data.HandleRemoveCart(e)}>-</button>
                    <p>{e.quantity}</p>
                    <button
                      className="plusbtn"
                      onClick={() => data.HandleProduct(e)}>+</button>
                  </div>
                </div>
                <div className="productdetails">
                  <p className="title">{e.title}</p>
                  <p className="productbrand">Brand : {e.brand}</p>
                  <div className="offer">
                    <p className="price">price : {e.price}</p>
                    <p className="off">
                      {Math.round(e.discountPercentage)} % off
                    </p>
                  </div>
                  <p className="productshipping">
                    Shipping : {e.shippingInformation}
                  </p>
                  <p className="productwarranty">
                    Warranty : {e.warrantyInformation}
                  </p>
                  <p className="productreturnPolicy">{e.returnPolicy}</p>
                </div>
              </div>
              <div className="cartbtn">
                <button
                  className="removebtn"
                  onClick={() => data.DeleteCartProduct(e)}>
                  Remove
                </button>
                <button
                  className="clearbtn"
                  onClick={() => data.ClearCartProduct(e)}>
                     Clear Cart
                </button>
              </div>
            </section>
          ))
        ) : (
          <center className="empty-card">
            <h2>Your  Cart is empty.</h2>
            <Link to="/">Continue Shoping <BsCaretRight className="arrowright" /></Link>
          </center>
        )}
      </center>
      <Footer />
    </div>
  );
}

export default Cart;
