import { useState, useEffect } from 'react';

import ProductCard from './ProductCard';

import { AnimatePresence, motion } from 'framer-motion';
import store from './Store.module.css';

export default function Store() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://604781a0efa572c1.mokky.dev/items')
            .then((response) =>
                response
                    .json()
                    .then((_products) => setProducts(_products.slice(0, 12)))
            )
            .catch(console.error);
    }, []);

    const [filter, setFilter] = useState('');

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={store.store}>
            <div className={store['title-block']}>
                <span className={store.title}>Все кроссовки</span>

                <div className={store['search-wrapper']}>
                    <img
                        src='/search.svg'
                        alt='search'
                        className={store['search-icon']}
                    />

                    <input
                        type='text'
                        value={filter}
                        placeholder='Поиск...'
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
            </div>

            <div className={store.products}>
                <AnimatePresence>
                    {filteredProducts.map((product) => {
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.imageUrl}
                                    id={product.id}
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
