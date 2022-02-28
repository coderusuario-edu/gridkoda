import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const useCartContext = () => {
    return useContext(CartContext);
};

export const CartContextComponent = ({ children }) => {
    let nombre = "Grid & Koda";

    const [cart, setCart] = useState([]);
    //Esta función hay que verla, para poder agregar Items en vez de bloquear el contador. La idea es buscar el objeto dentro del array y cambiar el valor cantidad
    const addItem = (item, quantity) => {
        setCart([...cart, { ...item, quantity }]);
    };

    const isInCart = (id) => {
        let found = cart.some((item) => {
            return item.id === id;
        });
        return found;
    };
    const getItemInCart = (id) => {
        let found = cart.find((item) => {
            return item.id === id;
        });
        return found;
    };
    const removeItem = (itemId) => {
        let nuevaLista = cart.filter((item) => {
            return item.id !== itemId;
        });
        setCart(nuevaLista);
    };

    const clear = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                nombre,
                isInCart,
                getItemInCart,
                addItem,
                removeItem,
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default useCartContext;
