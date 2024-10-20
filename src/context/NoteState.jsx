import React, { useEffect, useState } from 'react';
import NoteContext from './NoteContext';
import axios from 'axios';

function NoteState(props) {
    let [data, setData] = useState(null);
    let [displayProduct, setDisplayProduct] = useState([]);
    let [productCartItem, setProductCartItem] = useState([]);
    let [toggle, setToggle] = useState(false);

    function getData() {
        let url = `https://dummyjson.com/products`;

        axios.get(url).then((response) => {
            setData(response.data.products);
            console.log(response.data.products);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    function DisplayData(products) {
        // Instead of mutating the array, create a new one
        setDisplayProduct((prevDisplayProduct) => {
            const newDisplayProduct = [...prevDisplayProduct];
            newDisplayProduct.shift(); // Remove the first element
            newDisplayProduct.push(products); // Add the new product at the end
            return newDisplayProduct;
        });
    }

    function HandleProduct(product) {
        let productExist = productCartItem.find((item) => item.id === product.id);

        if (productExist) {
            setProductCartItem(
                productCartItem.map((item) =>
                    item.id === product.id
                        ? { ...productExist, quantity: productExist.quantity + 1 }
                        : item
                )
            );
        } else {
            setProductCartItem([...productCartItem, { ...product, quantity: 1 }]);
        }
    }

    function HandleRemoveCart(product) {
        let productExist = productCartItem.find((item) => item.id === product.id);

        if (productExist.quantity === 1) {
            setProductCartItem(productCartItem.filter((item) => item.id !== product.id));
        } else {
            setProductCartItem(
                productCartItem.map((item) =>
                    item.id === product.id
                        ? { ...productExist, quantity: productExist.quantity - 1 }
                        : item
                )
            );
        }
    }

    function DeleteCartProduct(product) {
        const updatedCart = productCartItem.filter((item) => item.id !== product.id);
        setProductCartItem(updatedCart);
        if (updatedCart.length === 0) {
            setToggle(false);
        }
    }

    function ClearCartProduct() {
        setProductCartItem([]);
        setToggle(false);
    }

    return (
        <NoteContext.Provider
            value={{
                data,
                DisplayData,
                displayProduct,
                HandleProduct,
                productCartItem,
                DeleteCartProduct,
                ClearCartProduct,
                HandleRemoveCart,
                setToggle,
                toggle,
            }}
        >
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
