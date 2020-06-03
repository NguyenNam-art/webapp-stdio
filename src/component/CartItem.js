import React, { Component } from "react";
import './cpnStyle/Cart.scss'
class CartItem extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        quantity: 1
      };
    }
  }
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
  onDeleteProduct = (product) => {
    var { onDeleteProduct } = this.props;
    onDeleteProduct(product);
  };  
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.setState({
        quantity: quantity,
      });
      this.props.onUpdateAmount(product, quantity);
    }
  };
  render() {
    var { item } = this.props;
    var { quantity } = this.state;
    return (
      <tr>
        <th>
          <img style={{ width: "120px" }} src={item.product.image} alt="" />
        </th>
        <th>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </th>
        <th>
        <h5>
            <strong>{item.product.price}$</strong>
          </h5>
        </th>
        <th><h5>{quantity}</h5></th>
        
        <th>
          <div>
            
            <h5
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
              className="btn btn-sm btn-danger"
            >
              <a>—</a>
            </h5>
            <h5
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
              className="btn btn-sm btn-danger"
            >
              <a>+</a>
            </h5>
          </div>
        </th>
        <th><h5>{this.showSubTotal(item.product.price, item.quantity)} $</h5></th>
        <th>
          <h5>
          <button
            onClick={() => this.onDeleteProduct(item.product)}
            type="button"
            className="btn btn-sm btn-danger"
          >
            X
          </button>
          </h5>
          
        </th>
      </tr>
    );
  }
}

export default CartItem;
