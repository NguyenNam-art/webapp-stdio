import React from "react";
import "./app.scss";
import Header from './component/Header'
import Cart from './component/Cart'
// import Slider from "react-slick";
import ProductContainer from "./Containers/ProductContainer";
import CartContainer from "./Containers/CartContainer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductContainer/>
      <CartContainer></CartContainer>
    </div>
  );
}
export default App;
