import React, { Component } from "react";
import {connect} from 'react-redux'
import Cart from './../component/Cart'
import CartItem from './../component/CartItem'
import CartResult from './../component/CartResult'
// import Product from './../component/Product'
class CartContainer extends Component {
  render() {

    var {cart} = this.props;
    console.log(cart);
    return (  
      // <Product>
      //     {this.showCartItem(cart)}
      // </Product>
      
          <Cart>
              {this.showCartItem(cart)}
              {this.showTotalAmount(cart)}
          </Cart>
     
    );
  }
  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
        result = <CartResult cart={cart} />
    }
    return result;
}
  showCartItem = (cart) =>{
      var result = null;
      if(cart.length>0){
          result = cart.map((item,index) =>{
            return(
              <CartItem key={index} item={item}></CartItem>
            )
          }) 
      }
      return result;
  }
}


const mapStateToProps = state =>{
  return {
    cart : state.cart
  }
}
export default connect(mapStateToProps,null) (CartContainer);
