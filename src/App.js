// import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home.js'
import Cart from "./components/Cart.js"

import './App.css';
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
// allows me to create multiple pages ^


function App() {
  return (
    <Provider store={store}>
     <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/cart" component={Cart}/>
       </Switch>
      </BrowserRouter>
     </div>
    </Provider>
  );
}

export default App;
