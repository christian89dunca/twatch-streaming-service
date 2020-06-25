import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";

class Auth extends Component {
  render() {
    return (
      <div className="center">
        <GoogleAuth />
      </div>
    );
  }
}

export default Auth;
