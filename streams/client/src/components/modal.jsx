import React from "react";
import ReactDOM from "react-dom";

const renderModal = (props) => {
  return (
    <div>
      <div className="modal-backdrop fade show"></div>
      <div
        onClick={props.onDismiss}
        className="modal  fade show"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
        data-backdrop={true}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {props.title}
              </h5>
            </div>
            <div className="modal-body">{props.content}</div>
            <div className="modal-footer">{props.actions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    renderModal(props),
    document.querySelector("#modal")
  );
};

export default Modal;
