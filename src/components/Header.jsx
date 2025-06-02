import { NavLink } from 'react-router-dom';

import { useCart } from '../CartContext';

import header from './Header.module.css';

export default function Header() {
    const { setShowModal, summary, setCompleted } = useCart();

    return (
        <header className={header.header}>
            <div className={header.navigation}>
                <NavLink to='/'>
                    <div className={header['title-block']}>
                        <img src='/logo.png' alt='logo' />
                        <div className={header['title-text']}>
                            <span>REACT SNEAKERS</span>
                            <span>Магазин лучших кроссовок</span>
                        </div>
                    </div>
                </NavLink>

                <div className={header['link-block']}>
                    <button
                        className={header.link}
                        onClick={() => {
                            setShowModal(true);
                            setCompleted(false);
                        }}
                    >
                        <img src='/cart.svg' alt='cart' />
                        <span>{summary} руб.</span>
                    </button>

                    <NavLink to='/favorites' className={header.link}>
                        <img src='/favorites.svg' alt='' />
                        <span>Закладки</span>
                    </NavLink>

                    <NavLink to='/' className={header.link}>
                        <img src='/profile.svg' alt='profile' />
                        <span>Профиль</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
