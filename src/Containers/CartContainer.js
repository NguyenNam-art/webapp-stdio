import React, { Component } from "react";
import {connect} from 'react-redux'
import Cart from './../component/Cart'
import CartItem from './../component/CartItem'
import CartResult from './../component/CartResult'
import { actDeleteProduct, actUpdateAmount } from "../Actions";
 
// import Product from './../component/Product'
class CartContainer extends Component {
  render() {

    var {cart} = this.props;
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
      var {onDeleteProduct} = this.props;
      var {onUpdateAmount} = this.props;
      if(cart.length>0){
          result = cart.map((item,index) =>{
            return(
              <CartItem onDeleteProduct = {onDeleteProduct}  onUpdateAmount = {onUpdateAmount} key={index} item={item}></CartItem>
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
const mapDispatchToProps = (dispatch, props) => {
  return {
      onDeleteProduct: (product) => {
          dispatch(actDeleteProduct(product));
      },
      onUpdateAmount : (product,quantity) =>{
        dispatch(actUpdateAmount(product,quantity));
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);
