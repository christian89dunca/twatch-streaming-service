import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class NavBar extends React.Component {
  renderGoLive() {
    if (this.props.isSignedIn) {
      return (
        <NavLink className="nav-item nav-link" exact to="/streams/new">
          Go Live!{" "}
          <span>
            <i className="fas fa-podcast"></i>
          </span>
        </NavLink>
      );
    } else return;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/streams">
          Twatch
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" exact to="/streams/">
              All Streams
            </NavLink>
            <div className="go-live">
              {this.renderGoLive()}
              <GoogleAuth />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    button: state.auth.button,
  };
};

export default connect(mapStateToProps)(NavBar);
