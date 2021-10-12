import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import ProductCategory from './pages/Product/ProductCategory';
import ProductDetail from './pages/Product/ProductDetail';
import Search from './pages/Search/Search';
import Signup from './pages/Users/Signup/Signup';
import Signin from './pages/Users/Signin/Signin';
import Cart from './pages/Cart/Cart';
import OrderComplete from './pages/Cart/OrderComplete';
import Footer from './components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order-complete" component={OrderComplete} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
