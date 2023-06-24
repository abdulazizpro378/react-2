import React, { Component, Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
