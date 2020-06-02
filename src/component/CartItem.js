import React, { Component } from "react";
import "./cpnStyle/Cart.scss";

class CartItem extends Component {
  render() {
    var { item } = this.props;
    
    return (
      // <tr>
      //     <th scope="row">
      //         <img src={item.product.image}
      //             alt={item.product.name} className="img-fluid z-depth-0" />
      //     </th>
      //     <td>
      //         <h5>
      //             <strong>{item.product.name}</strong>
      //         </h5>
      //     </td>
      //     <td>{item.product.price}$</td>
      //     <td className="center-on-small-only">
      //         <span className="qty">{quantity} </span>
      //         <div className="btn-group radio-group" data-toggle="buttons">
      //             <label
      //                 onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
      //                 className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
      //             >
      //                 <a>—</a>
      //             </label>
      //             <label
      //                 onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
      //                 className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
      //             >
      //                 <a>+</a>
      //             </label>
      //         </div>
      //     </td>
      //     <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
      //     <td>
      //         <button
      //             type="button"
      //             className="btn btn-sm btn-primary waves-effect waves-light"
      //             data-toggle="tooltip"
      //             data-placement="top"
      //             title=""
      //             data-original-title="Remove item"
      //             onClick={() => this.onDelete(item.product)}
      //         >
      //             X
      //         </button>
      //     </td>
      // </tr>

      <tr>
        <th scope="row">
          <img
            style={{ width: "150px" }}
            src={item.product.image}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <div className="btn-group radio-group" data-toggle="button">
            <span className="qty">{item.quantity}</span>
            <label className="btn btn-sm btn-danger btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-danger btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)} $</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-danger waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  // onUpdateQuantity = (product, quantity) => {
  //     if (quantity > 0) {
  //         var { onUpdateProductInCart, onChangeMessage } = this.props;
  //         onUpdateProductInCart(product, quantity);

  //     }
  // }

  // onDelete = (product) => {
  //     var { onDeleteProductInCart, onChangeMessage } = this.props;
  //     onDeleteProductInCart(product);

  // }

  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
}

export default CartItem;
