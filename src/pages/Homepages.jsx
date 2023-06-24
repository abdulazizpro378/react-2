import React, { Component, Fragment } from "react";
import About from "../components/about/About";
import SimpleSlider from "../components/home";
import Hoviy from "../components/Hoviy/Hoviy";
import Komonda from "../components/komonda/Komonda";
import Product from "../components/product/Product";
import Register from "../components/register/Register";
import Responsive from "../components/sertifikat/Sertifikat";

import Layout from "../layout/Layout";

export class Homepages extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <SimpleSlider />
          <About />
          <Responsive />
          <Product />
          <Register />
          <Komonda />
          <Hoviy />
        </Layout>
      </Fragment>
    );
  }
}

export default Homepages;
