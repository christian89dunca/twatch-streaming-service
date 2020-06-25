import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions/index";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  handleDismiss() {
    history.push("/streams");
  }

  handleDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleDelete}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
        <Link
          to="/streams"
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return [
      "Are you sure you want to delete ",
      <strong key={this.props.match.params.id}>
        {" "}
        {this.props.stream.title}{" "}
      </strong>,
      " ?",
    ];
  }

  render() {
    console.log(this.props);
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.handleDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
