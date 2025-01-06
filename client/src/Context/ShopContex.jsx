import React, { createContext, useEffect, useState } from "react";
import all_product from '../Components/Assets/all_products.js'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    // should switch to fetch from DB
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [all_product, setAll_Product] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
        .then((res) => res.json())
        .then((data) => setAll_Product(data))

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: ""
            })
            .then((res) => res.json)
            .then((data) => setCartItems(data));
        }
    }, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1, // Increment the count or set it to 1 if undefined
        }));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    "itemid": JSON.stringify(itemId)
                }
            })
            .then((res) => res.json)
            .then((data) => console.log(data));
        }

    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1, 
        }));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removecart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    "itemid": JSON.stringify(itemId)
                }
            })
            .then((res) => res.json)
            .then((data) => console.log(data));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => 
                    product.id === Number(item)
                );
                if (itemInfo) { 
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount; 
    };

    const getTotalItems = () => {
        let totalItems = 0;
        
        for ( const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;