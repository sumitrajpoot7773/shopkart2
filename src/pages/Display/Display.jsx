import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import NoteContext from '../../context/NoteContext';
import Header from '../../components/header/Header';
import Footer from '../../pages/Footer/Footer.jsx';
import './Display.css';
import Addtocart from '../../components/AddToCart/Addtocart';

function Display() {
    
    let data = useContext(NoteContext);
    console.log('d',data.displayProduct);
    return (
        <div>
            <Header />
            {data.displayProduct[0] ? (
                <section>
                    {data.displayProduct.map((product) => (
                        <section className="product-section" key={product.id}>
                            <div className="product-image">
                                <img src={product.images[0]} alt={product.category} />
                            </div>
                            <div className="product-details">
                                <p className="product-title">{product.title}</p>
                                <p className="product-price">${product.price}</p>
                                <p className="product-description">{product.description}</p>
                                <p className="product-category">{product.category}</p>
                                <p className="product-brand">{product.brand}</p>
                                <p className="product-shipping">{product.shippingInformation}</p>
                                <p className="product-warranty">{product.warrantyInformation}</p>
                                <p className="product-returnPolicy">{product.returnPolicy}</p>
                            </div>
                            <div className="addtocart">
                                <Addtocart e={product} />
                            </div>
                        </section>
                    ))}
                </section>
             ) : (
                <Navigate to="/" />
            )}
            <Footer />
        </div>
    );
}

export default Display;
