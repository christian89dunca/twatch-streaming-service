import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1035100880380-egll15sf7es6dqv9o9a1mjams4k8g5v3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (!this.props.isSignedIn) {
      return (
        <button
          type="button"
          className="btn btn-a btn-danger g"
          onClick={this.onSignInClick}
        >
          <i className="fa fa-google b g" aria-hidden="true"></i>
          Sign in with Google
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-a btn-danger g"
          onClick={this.onSignOutClick}
        >
          <i className="fa fa-google b g" aria-hidden="true"></i>
          Sign Out
        </button>
      );
    }
  }

  render() {
    // console.log(this.props);
    return <div className="btn-div">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    button: state.auth.button,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
