import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome/css/all.css';
import './App.css';

import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails';
import Page404 from './components/Page404';
import Modal from './components/Modal';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/product-details" component={ProductDetails} />
          <Route component={Page404} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

export default App;