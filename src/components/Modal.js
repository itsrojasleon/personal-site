import React from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper, ModalContent, Theme, Content } from '../styles/modal';

const Modal = props => {
  return ReactDOM.createPortal(
    <ModalWrapper onClick={props.onDismiss}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Theme>Theme</Theme>
        <Content>
          <div>
            <p>Light theme</p>
            <input type="checkbox" />
          </div>
          <div>
            <p>Dark theme</p>
            <input type="checkbox" />
          </div>
          <div>
            <p>Spanish</p>
            <input type="checkbox" />
          </div>
        </Content>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  );
};
export default Modal;
