import React, { useContext } from 'react'
import './Cart.css'
import NoteContext from '../../context/NoteContext';
function Addtocart(props) {
  const D = useContext(NoteContext);

  function handleclick (e){
    D.HandleProduct(e)
    D.setToggle(true);
  }
  return (
    <div>
        <button className='cart-btn'  onClick={()=>handleclick(props.e)}>Add To Cart</button>
    </div>
  )
}

export default Addtocart