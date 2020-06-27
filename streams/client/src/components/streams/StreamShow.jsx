import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";

import { fetchStream } from "../../actions/index";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);

    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  renderStream() {
    if (!this.props.stream) {
      return <div>loading</div>;
    }
    return this.props.stream;
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="video-placeholder-lg">
          <video ref={this.videoRef} style={{ width: "80vw" }} controls />
        </div>
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
