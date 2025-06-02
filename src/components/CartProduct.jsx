import { useCart } from '../CartContext';

import cartProduct from './CartProduct.module.css';

export default function CartProduct({ title, price, image, id }) {
    const { setSummary, RemoveProduct } = useCart();

    return (
        <div className={cartProduct['cart-product']}>
            <img src={image} alt='sneakers' />

            <div className={cartProduct['product-info']}>
                <span className={cartProduct['title']}>{title}</span>

                <span className={cartProduct['price']}>{price} руб.</span>
            </div>

            <button
                onClick={() => {
                    RemoveProduct(id);
                    setSummary((prev) => prev - price);
                }}
            >
                <img src='/delete-product.svg' alt='delete-product' />
            </button>
        </div>
    );
}
