import React, { Component, Fragment } from 'react'
//import { Router, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <HomePage />
            </Fragment>

            // <Fragment>
            //     <Switch>
            //         <Route exact path="/" component={HomePage} />

            //     </Switch>
            // </Fragment>
        )
    }
}

export default AppRoute