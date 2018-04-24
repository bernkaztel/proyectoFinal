import React, { Component } from "react";
import { Modal } from "reactstrap";
import ConnectedUser from "./connectedUser";
import Map from './components/Map';

class MySmallModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          bsSize="small"
          aria-labelledby="contained-modal-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYptDcZgjGqHclDY2Iyslqcs0d57MePkk&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  export default MySmallModal;