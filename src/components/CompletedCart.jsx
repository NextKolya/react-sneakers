import { useCart } from '../CartContext';

import cart from './Cart.module.css';

export default function CompletedCart() {
    const { setShowModal } = useCart();

    return (
        <div className={cart['empty-cart']}>
            <img src='/completed-cart.svg' alt='' />
            <span className={cart['empty-title']} style={{ color: '#87C20A' }}>
                Заказ оформлен!
            </span>
            <span className={cart['empty-text']}>
                Ваш заказ #{Math.floor(Math.random() * 60)} скоро будет передан
                курьерской доставке
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
