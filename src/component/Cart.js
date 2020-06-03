import React, { Component } from "react";
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
    
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tăng Giảm</th>
                <th>Tổng Cộng</th>
              </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
          </table>
        </div>
     
    );
  }
}

export default Cart;
