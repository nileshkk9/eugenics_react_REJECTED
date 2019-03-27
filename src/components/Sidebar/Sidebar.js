import React, { Component } from "react";
import "./Style.css";
import TakeInput from "./TakeInput";
import { Link } from "react-router-dom";
// import auth from "../auth";
class Sidebar extends Component {
  state = {
    nav: "sidebar"
  };
  logout = () => {
    localStorage.removeItem("LoginData");
    window.location.href = "/";
  };
  handleClick = () => {
    this.setState({
      nav: this.state.nav === "sidebar" ? "sidebar sidebar-active" : "sidebar"
    });
  };
  componentDidMount() {
    if (localStorage.getItem("LoginData")) {
      const state = JSON.parse(localStorage.getItem("LoginData"));
      this.setState({ ...state });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <nav className={this.state.nav}>
            <div className="sidebar-header">
              <h3>sidebar</h3>
            </div>
            <ul className="list-unstyled ">
              <p>Eugenics</p>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>

            <ul className="list-unstyled CTAs">
              <li>
                <Link to="/" className="download">
                  Download source
                </Link>
              </li>

              <li>
                <Link to="/" className="article">
                  Back to article
                </Link>
              </li>
            </ul>
          </nav>
          <div id="content">
            <nav className="navbar navbar-light bg-light">
              <button
                type="button"
                onClick={this.handleClick}
                className="btn btn-info btn-xs"
              >
                <i className="fas fa-align-left" />
                {/* <span>Toggle Sidebar</span> */}
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={this.logout}
              >
                <i className="fas fa-sign-out-alt pad-takeinput" />
                {/* <span>Logout</span> */}
              </button>
            </nav>
            {this.props.isInput ? (
              <TakeInput username={this.state.username} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
