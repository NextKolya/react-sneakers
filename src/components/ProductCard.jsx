import { useState, useEffect } from 'react';

import { useCart } from '../CartContext';

import productCard from './ProductCard.module.css';

export default function ProductCard({ title, price, image, id }) {
    const { cartProducts, setCartProducts, setSummary, RemoveProduct } =
        useCart();

    function AddProduct() {
        setCartProducts((prev) => [
            ...prev,
            {
                title: title,
                image: image,
                price: price,
                id: id,
            },
        ]);
    }

    const [isLiked, setIsLiked] = useState(false);
    const isCart = cartProducts.some((product) => product.id === id);

    return (
        <div className={productCard['product-card']}>
            <button
                onClick={() => setIsLiked((prev) => !prev)}
                className={
                    isLiked
                        ? `${productCard['add-like']} ${productCard['is-liked']}`
                        : productCard['add-like']
                }
            >
                {isLiked ? (
                    <img src='/is-favorite.svg' alt='add-favorite' />
                ) : (
                    <img src='/add-favorite.svg' alt='add-favorite' />
                )}
            </button>

            <img src={image} alt='sneakers' />

            <span>{title}</span>

            <div className={productCard['price-block']}>
                <div>
                    <span>ЦЕНА: </span>
                    <span>{price} руб.</span>
                </div>
                <button
                    onClick={() => {
                        if (isCart === false) {
                            AddProduct();
                            setSummary((prev) => prev + price);
                        } else {
                            RemoveProduct(id);
                            setSummary((prev) => prev - price);
                        }
                    }}
                    className={
                        isCart
                            ? `${productCard['add-cart-button']} ${productCard['is-cart']}`
                            : `${productCard['add-cart-button']}`
                    }
                >
                    {isCart ? <img src='/is-cart.svg' alt='is-cart' /> : '+'}
                </button>
            </div>
        </div>
    );
}
