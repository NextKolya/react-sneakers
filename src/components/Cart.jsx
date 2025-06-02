import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import { useCart } from '../CartContext';

import CartProduct from './CartProduct';
import EmptyCart from './EmptyCart';
import CompletedCart from './CompletedCart';

import { motion, AnimatePresence } from 'framer-motion';
import cart from './Cart.module.css';

export default function Cart() {
    const {
        summary,
        setSummary,

        cartProducts,
        setCartProducts,

        showModal,
        setShowModal,
        completed,
        setCompleted,
    } = useCart();

    useEffect(() => {
        console.log(completed);
    }, [completed]);

    function SelectCart() {
        if (completed) {
            return <CompletedCart />;
        } else if (cartProducts.length > 0) {
            return (
                <div className={cart['cart-products']}>
                    <div className={cart.products}>
                        <AnimatePresence>
                            {cartProducts.map((cartProduct) => {
                                return (
                                    <motion.div
                                        key={cartProduct.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CartProduct
                                            key={cartProduct.id}
                                            title={cartProduct.title}
                                            image={cartProduct.image}
                                            price={cartProduct.price}
                                            id={cartProduct.id}
                                        />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <div className={cart['checkout-block']}>
                        <div className={cart.summary}>
                            <span>Итого:</span>
                            <span>{summary} руб.</span>
                        </div>
                        <div className={cart.summary}>
                            <span>Налог 5%:</span>
                            <span>{(summary * 0.05).toFixed(0)} руб.</span>
                        </div>

                        <button
                            className={cart['checkout-button']}
                            onClick={() => {
                                setCompleted(true);
                                setCartProducts([]);
                                setSummary(0);
                            }}
                        >
                            Оформить заказ
                            <img src='/right-arrow.svg' alt='right-arrow' />
                        </button>
                    </div>
                </div>
            );
        } else {
            return <EmptyCart />;
        }
    }

    return ReactDOM.createPortal(
        showModal && (
            <div
                className={cart['modal-backdrop']}
                onClick={() => setShowModal(false)}
            >
                <div className={cart.cart} onClick={(e) => e.stopPropagation()}>
                    <span className={cart.title}>Корзина</span>

                    {SelectCart()}
                </div>
            </div>
        ),
        document.getElementById('modal-root')
    );
}
