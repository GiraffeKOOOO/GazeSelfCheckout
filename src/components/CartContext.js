import { useState, createContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem('cartItems')) || []
    )
    const [cartTotal, setCartTotal] = useState(
        JSON.parse(localStorage.getItem('cartTotal')) || 0
    )

    const [cartQuantity, setCartQuantity] = useState(
        JSON.parse(localStorage.getItem('cartQuantity')) || 0
    )

    const calculateTotal = (price) => {
        setCartTotal(cartItems.reduce((a, b) => a + b.price * b.quantity, price).toFixed(2));
    }

    useEffect(() => {
        const cartItems = window.localStorage.getItem('cartItems');
        if (cartItems !== null) {
            setCartItems(JSON.parse(cartItems));
        }
        const cartTotal = window.localStorage.getItem('cartTotal');
        if(cartTotal !== null) {
            setCartTotal(cartTotal);
        }
        const cartQuantity = window.localStorage.getItem('cartQuantity');
        if(cartQuantity !== null) {
            setCartQuantity(cartQuantity);
        }
      }, [])

    useEffect(() => {
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        window.localStorage.setItem('cartTotal', cartTotal);
    }, [cartTotal]);

    useEffect(() => {
        window.localStorage.setItem('cartQuantity', cartQuantity);
    }, [cartQuantity]);

    const addToCart = (name, price, quantity) => {
        const exists = cartItems.find(element => element.name === name)
        if (exists) {
            setCartItems(
                cartItems.map((element) => 
                    element.name === name ? {...exists, quantity: exists.quantity + quantity} : element,
                )
            )
            calculateTotal(price*quantity)
        } else {
            setCartItems((prevState) => [...prevState, {name, price, quantity}])
            calculateTotal(price*quantity)
        }
        calculateCartQuantity()
    }

    const calculateCartQuantity = () => {
        setCartQuantity(cartItems.reduce((accumulator,item) => accumulator + item.quantity, 1));
    }

    const clearCart = () => {
        setCartItems([])
        setCartTotal(0)
        setCartQuantity(0)
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart, clearCart, cartTotal, cartQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;