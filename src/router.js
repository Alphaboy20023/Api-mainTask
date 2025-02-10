import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import User from "./pages/User";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";


function Navbarlinks(params) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/SignUpPage" element={<SignUpPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/User" element={<User />} />
            </Routes>
        </Router>
    )
};

export default Navbarlinks;