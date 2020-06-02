import React, { Component } from "react";
import Containers from '../component/Containers'
import {connect} from 'react-redux'
import Product from './../component/Product'
import {actAddToCart} from './../Actions/index'
// import Slider from "react-slick";
class ProductContainer extends Component {
  render() {
    var {products} = this.props;
    
    return (
      <Containers>
        {this.showProducts(products)}
      </Containers>
    );
  }
  showProducts(products){
    var result = null;
    var { onAddToCart } = this.props;
    if(products.length>0){
      result = products.map((product,index) =>{
        return <Product 
                  onAddToCart = {onAddToCart}
                  key={index} 
                  product={product}>
                  
                </Product>
      }) 
    }
    return result;
  }
}

const mapStateToProps = state =>{
  return{
    products : state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      onAddToCart: (product) => {
          dispatch(actAddToCart(product, 1));
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductContainer);
