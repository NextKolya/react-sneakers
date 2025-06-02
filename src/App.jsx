import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './CartContext';

import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Cart from './components/Cart';

export default function App() {
    return (
        <CartProvider>
            <Router>
                <div className='container'>
                    <Header></Header>
                    <main className='main-content'>
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route
                                path='/favorites'
                                element={<Favorites />}
                            ></Route>
                        </Routes>
                    </main>
                    <Cart />
                </div>
            </Router>
        </CartProvider>
    );
}
