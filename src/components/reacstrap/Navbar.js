import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logout } from "../../actions/userActions";
import { googleLogin } from "../../actions/userActions";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg font-color">
        <a className="navbar-brand font-color" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link font-color" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-color" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle font-color"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
            </li>
            {this.props.user == null ? (
              <button
                className="btn btn-sucess"
                onClick={this.props.googleLogin}
              >
                Login
              </button>
            ) : (
              <button
                className="btn btn-danger"
                onClick={() => this.props.logout()}
              >
                logout
              </button>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUser, logout, googleLogin})(Navbar);
