import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default Modal;
