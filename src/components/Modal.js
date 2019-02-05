import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="something">
      <div onClick={e => e.stopPropagation()} className="active">
        <div>TITLE</div>
        <div>Content</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
export default Modal;
