import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [showModal, setShowModal] = useState(false);

    const [cartProducts, setCartProducts] = useState([]);

    function RemoveProduct(id) {
        setCartProducts((prev) =>
            prev.filter((cartProduct) => cartProduct.id !== id)
        );
    }

    const [summary, setSummary] = useState(0);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        console.log(cartProducts);
    }, [cartProducts]);

    return (
        <CartContext.Provider
            value={{
                showModal,
                setShowModal,

                summary,
                setSummary,
                completed,
                setCompleted,

                cartProducts,
                setCartProducts,
                RemoveProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
