import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class Helper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-secondary bus" onClick={this.toggle}><i className="fa fa-info-circle fa-lg"></i><br/>Need Help?</button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>About this game</ModalHeader>
          <ModalBody>
            The intention of this game is you have to click the box as fast as possible within 10s. You have to start the game by clicking the Play button in order to play the game.
          </ModalBody>
          <ModalFooter>
            <button class="btn btn-outline-primary waves-effect" onClick={this.toggle}>Ok, thanks</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
