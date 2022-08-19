import { createContext } from 'react';

const CartContext = createContext();

function CartProvider ({ children }) {
    return (
        <CartContext.Provider value={{ }}>{children}</CartContext.Provider>
    );
}

export default CartProvider;