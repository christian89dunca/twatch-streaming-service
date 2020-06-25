import React, { Component } from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { createStreams } from "../../actions";

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStreams(formValues);
  };

  render() {
    return (
      <div>
        <h3> Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStreams })(StreamCreate);
