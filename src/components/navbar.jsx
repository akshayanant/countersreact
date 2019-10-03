import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Item Count{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.setCount}
          </span>
          Price{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.setPrice}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
