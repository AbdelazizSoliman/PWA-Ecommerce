import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import ContactPage from '../pages/ContactPage'
import PurchasePage from '../pages/PurchasePage'
import PrivacyPage from '../pages/PrivacyPage'
import RefundPage from '../pages/RefundPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import NotificationPage from '../pages/NotificationPage'
import FavouritePage from '../pages/FavouritePage'
import CartPage from '../pages/CartPage'



class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<UserLoginPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/purchase" element={<PurchasePage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/refund" element={<RefundPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/productdetails" element={<ProductDetailsPage />} />
                    <Route path="/notification" element={<NotificationPage />} />
                    <Route path="/favourite" element={<FavouritePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Fragment>
        )
    }
}

export default AppRoute
