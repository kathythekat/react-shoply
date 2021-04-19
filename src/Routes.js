import { Route, Switch } from "react-router";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";


function Routes() {
  return (
    <Switch>
      <Route exact path="/"><ProductList title='All products' type="all"/></Route>
      <Route exact path="/cart"><ProductList title='Cart' type="cart"/></Route>
      <Route path="/product/:id"><ProductDetails /></Route>
    </Switch>
  );
}

export default Routes;
