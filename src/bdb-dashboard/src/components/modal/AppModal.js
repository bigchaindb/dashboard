import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import './AppModal.css';
class AppModal extends Component {
  open = false;
  close = () => {
    this.props.onClose();
  }
  render() {
    return (
      <div>
        <Modal dimmer={true} open={this.props.state.open} onClose={this.close} closeIcon>
          <Modal.Header className="modalHeader"><span>{this.props.state.title}</span></Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <pre className="modal-trim">{JSON.stringify(this.props.state.content,null, 2)}</pre>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default AppModal;
