import React, { Component } from "react";
import "./cpnStyle/Header.scss";
import logo from "./../img/logo-giay2hand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductContainer from "./../Containers/ProductContainer";
import CartContainer from "./../Containers/CartContainer";
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword : ''
    }
  }
  onChange = (event) =>{
    var target  = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
    console.log(this.state);

  }
  render() {
    var {keyword} = this.state;
    return (
      <Router>
        <div className="App">
          <header>
            <p>Đăng nhập</p>
          </header>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/Home">
              <img src={logo} alt="logoimage"></img>
            </a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a href="/Home" className="nav-link">
                    GIÀY SECONDHAND <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/Home">
                    GIÀY NEW <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="!#">
                    GIÀY SALE <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="!#">
                    BLOG <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  name ="keyword"
                  value = {keyword}
                  onChange = {this.onChange }

                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="navbar-icon navbar-brand">
              <a href="/Cart">
                <FontAwesomeIcon className="icon" icon={faShoppingCart} />
              </a>
              <a href="/Home">
                <FontAwesomeIcon className="icon" icon={faHeart} />
              </a>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}
export default Header;
