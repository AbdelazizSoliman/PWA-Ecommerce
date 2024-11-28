import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import ContactPage from '../pages/ContactPage'
import Purchase from '../components/others/Purchase'
import Privacy from '../components/others/Privacy'
import Refund from '../components/others/Refund'


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<UserLoginPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/refund" element={<Refund />} />
                </Routes>
            </Fragment>
        )
    }
}

export default AppRoute
