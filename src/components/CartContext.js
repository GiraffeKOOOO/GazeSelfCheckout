import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider ({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = ( addedProduct ) => {
        const exists = cartItems.find((existingProduct) => existingProduct.name === addedProduct.name);
        if (exists) {
            setCartItems(
                cartItems.map((existingProduct) => 
                    existingProduct.name === addedProduct.name ? {...exists, quantity: exists.quantity + 1} : existingProduct
                )
            );
        } else {
            setCartItems([...cartItems, {...addedProduct, quantity: 1}]);
        }
    }

    return (
        <CartContext.Provider value={{cartItems, setCartItems, onAdd}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;