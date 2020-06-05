import React from "react";
import "./app.scss";
import Header from './component/Header'
import {BrowserRouter as Router, Route}  from 'react-router-dom'
// import Slider from "react-slick";
import ProductContainer from "./Containers/ProductContainer";
import CartContainer from "./Containers/CartContainer";
import Footer from './component/Footer'
function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
      
      <Route path="/Cart" component={CartContainer}></Route>
      <Route exact path='/' component={ProductContainer}/>
      <Route path="/Home" component={ProductContainer}></Route>
      
      <Footer></Footer>
    </div>
    </Router>
  );
}
export default App;
