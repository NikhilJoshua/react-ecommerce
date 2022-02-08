import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/sign-in' element={<SignInAndSignUpPage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path='/shop' element={<ShopPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
