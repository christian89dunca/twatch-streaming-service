import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  handleEdit(id) {}

  handleDelete(id) {}

  renderCreatorButton(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="ed-btns">
          <div className="edit-delete">
            <Link
              to={`/streams/edit/${stream.id}`}
              className="btn btn-outline-secondary"
            >
              Edit
            </Link>
          </div>
          <div className="edit-delete">
            <Link
              to={`/streams/delete/${stream.id}`}
              className="btn btn-outline-danger"
            >
              Delete
            </Link>
          </div>
        </div>
      );
    } else return;
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="card card-style" key={stream.id}>
          <Link
            to={`/streams/${stream.id}`}
            className="video-placeholder"
          ></Link>
          <div className="card-body">
            <h5 className="card-title">{stream.title}</h5>
            <p className="card-text">{stream.description}</p>

            <div className="ed-btns">
              <Link
                to={`/streams/${stream.id}`}
                className="btn btn-outline-info"
              >
                View Stream
              </Link>
              {this.renderCreatorButton(stream)}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>See All Streams</h3>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
