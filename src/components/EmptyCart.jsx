import { useCart } from '../CartContext';

import cart from './Cart.module.css';

export default function EmptyCart() {
    const { setShowModal } = useCart();

    return (
        <div className={cart['empty-cart']}>
            <img src='/empty-cart.png' alt='' />
            <span className={cart['empty-title']}>Корзина пустая</span>
            <span className={cart['empty-text']}>
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </span>

            <button
                className={cart['back-button']}
                onClick={() => setShowModal(false)}
            >
                <img src='/left-arrow.svg' alt='right-arrow' />
                Вернуться назад
            </button>
        </div>
    );
}
