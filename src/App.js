import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import MainTitle from "./components/MainTitle";
import MyAccount from "./components/MyAccount";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Wrapper /> */}
        <Switch>
          <Route exact path="/">
            <MainTitle title="belanja" breadcrumb={false} />
            <Main />
          </Route>
          <Route exact path="/my-account">
            <MainTitle title="my account" breadcrumb={false} />
            <MyAccount />
          </Route>
          <Route exact path="/cart">
            <MainTitle title="cart" breadcrumb={false} />
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <MainTitle title="checkout" breadcrumb={false} />
            <Checkout />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route path="/sneakers">
            <MainTitle title="sneakers" breadcrumb={true} />
            <Main />
          </Route>
          <Route path="/sepatu-pendek">
            <MainTitle title="sepatu pendek" breadcrumb={true} />
            <Main />
          </Route>
          <Route path="/sepatu-boots">
            <MainTitle title="sepatu boots" breadcrumb={true} />
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
