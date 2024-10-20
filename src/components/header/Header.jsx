import React, { useContext } from "react";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import logo from "../../Assests/logo.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import NoteContext from "../../context/NoteContext";

function Header() {
  let data=useContext(NoteContext);
  return (
    <>
    <div className="header">
      <nav>

        <div className="logo">
          
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="searchbar flex">
          <IoMdSearch className="searc-icon" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="navlinks flex">
          <div className="login flex">
            <FaRegUserCircle className="Clogo" />
            <Link to="/login">LogIn</Link>
          </div>

          <div className="cart flex">
            <BsCart3 className="Llogo" />
            <Link to="/Cart">Cart</Link>
            {data.productCartItem.length !==0?<span>{data.productCartItem.length}</span>:null}
            
          </div>
          <div className="seller flex">
            <AiOutlineShop className="Slogo" />
            <Link to='/sell'>Become a seller</Link>
          </div>
          <div className="menu flex">
             <CiMenuKebab className="dot" />
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Header;






