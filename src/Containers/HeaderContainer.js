import React, { Component } from "react";
import {connect} from 'react-redux'
import Header from './../component/Header'
import { actDeleteProduct, actUpdateAmount } from "../Actions";
import Product from './../component/Product'
// import Product from './../component/Product'
class HeaderContainer extends Component {
  render() {    

    var {header} = this.props;
    return (  
      // <Product>
      //     {this.showCartItem(cart)}
      // </Product>
      
          <Header>
              {this.showFilter(header)}
          </Header>
     
    );
  }
  showFilter = (header) =>{
    var result = null;
    if(header.length>0){
        result = header.map((item,index) =>{
          return(
            <Product key={index} item={item}></Product>
          )
        }) 
    }
    return result;
}
  
}
export default connect(null,null) (HeaderContainer);
