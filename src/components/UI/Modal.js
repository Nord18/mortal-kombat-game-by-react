import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  return (
    <div className="modal d-block" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <p>Your character: {props.yourCharacter.name}</p>
            <p>Game is start...this window close after 10 seconds or you can press ENTER/ESC</p>
          </div>
          <div className="modal-footer">
            <button autoFocus onKeyDown={(evt) => props.closeModal(evt)} type="button" className="btn btn-secondary">Close modal</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  yourCharacter: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal