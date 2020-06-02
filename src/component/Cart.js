import React, { Component } from "react";
import CartContainer from "./../Containers/CartContainer";
import './cpnStyle/Cart.scss'
class Cart extends Component {
  render() {
    var {children} = this.props
    // var {product} = this.props;
    // toggleModal = (product) => {
    //     this.setState({
    //       modalisopen : !this.state.modalisopen
    //     });
    // }
    return (
      <section className="section container-fluid">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Cart;
