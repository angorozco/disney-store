import React, { createContext, useContext, useState } from "react";

const cartContext = createContext("");
const { Provider } = cartContext;
export const useCartContext = () => useContext(cartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

    const clear = () => setCart([]);

    const isInCart = (id) => cart.some((item) => item.id === id);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id !== item.id
                        ? product
                        : { ...product, quantity: product.quantity + quantity };
                })
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const totalProducts = () => {
        return cart.reduce((amount, product) => amount + product.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce(
            (amount, product) => amount + product.quantity * product.price,
            0
        );
    };

    return (
        <Provider
            value={{
                removeItem,
                clear,
                addItem,
                totalProducts,
                totalPrice,
                cart,
            }}
        >
            {children}
        </Provider>
    );
};

export default CartProvider;
