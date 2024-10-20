import React, { useContext } from 'react';
import NoteContext from '../../context/NoteContext';
import './Card.css'
import Addtocart from '../../components/AddToCart/Addtocart';
import { Link } from 'react-router-dom';
import loading from '../../Assests/Loader/loading-food.gif'
function Card() {
    const D = useContext(NoteContext);

    return (
        <>
            {D.data ? (
                <section className="card-container">
                    {D.data.map((e, index) => (
                        <div key={index} className="card">
                          
                            {(e.category === 'fragrances' || e.category === 'skincare' )&& (
                                <div className='fragrances category-card'>
                                   <Link to={'/display'} onClick={()=>{D.DisplayData(e)}}>
                                    <p className='title'>{e.title}</p>
                                    <h1 className='description'>{e.description}</h1>
                                    <p className='price'>${e.price}</p>
                                    <img src={e.images[0]} alt={e.category} className='image' />
                                   </Link>

                                   <Addtocart e={e}/>
                                </div>
                            )}
                            
                            {(e.category === 'beauty' || e.category === 'skincare')&&  (
                                <div className='smartphones category-card'>
                                    <Link to={'/display'} onClick={()=>{D.DisplayData(e)}}>
                                    <p className='title'>{e.title}</p>
                                    <h1 className='description'>{e.description}</h1>
                                    <p className='price'>${e.price}</p>
                                    <img src={e.images[0]} alt={e.category} className='image' />
                                    </Link>
                                    <Addtocart e={e}/>
                                </div>
                            )}
                            {e.category === 'furniture' && (
                                <div className='home-decoration category-card'>
                                    <Link to={'/display'} onClick={()=>{D.DisplayData(e)}}>
                                    <p className='title'>{e.title}</p>
                                    <h1 className='description'>{e.description}</h1>
                                    <p className='price'>${e.price}</p>
                                    <img src={e.images[0]} alt={e.category} className='image' />
                                    </Link>
                                    <Addtocart e={e}/>
                                </div>
                            )}
                            {e.category === 'groceries' && (
                                <div className='groceries category-card'>
                                    <Link to={'/display'} onClick={()=>{D.DisplayData(e)}}>
                                    <p className='title'>{e.title}</p>
                                    <h1 className='description'>{e.description}</h1>
                                    <p className='price'>${e.price}</p>
                                    <img src={e.images[0]} alt={e.category} className='image' />
                                    </Link>
                                    <Addtocart e={e}/>
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            ) : (
                <img className='loader' src={loading} alt="" />
            )}
        </>
    );
}

export default Card;
