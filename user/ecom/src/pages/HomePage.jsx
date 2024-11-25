import React, { Component, Fragment } from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts />
        <Categories />
      </Fragment>
    );
  }
}

export default HomePage;
