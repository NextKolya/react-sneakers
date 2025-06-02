import Store from '../components/Store';
import Cart from '../components/Cart';

import home from './Home.module.css';

export default function Home() {
    return (
        <div className={home.home}>
            <div className={home.ads}>
                <div className={home['slogan-block']}>
                    <img src='/ads_adidas.png' alt='adidas' />

                    <span className={home.slogan}>
                        Stan Smith
                        <span className={home.highlighted}>, Forever! </span>
                    </span>

                    <button className={home['buy-button']}>КУПИТЬ</button>
                </div>

                <img src='/ads_frog.png' alt='frog' />
            </div>

            <Store />
        </div>
    );
}
