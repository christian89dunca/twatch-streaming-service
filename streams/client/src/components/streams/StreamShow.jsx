import React from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions/index";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderStream() {
    if (!this.props.stream) {
      return <div>loading</div>;
    }
    return this.props.stream;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="video-placeholder-lg"></div>
        <h3>{this.renderStream().title}</h3>
        <h4>{this.renderStream().description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
