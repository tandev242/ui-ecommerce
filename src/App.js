import Home from "./pages/Home"
import Login from "./pages/Login"
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import Cart from "./pages/Cart"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/productList" component={ProductList} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
