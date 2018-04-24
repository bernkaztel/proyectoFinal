import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ConnectedUser from "./connectedUser";

export default class chatLateralBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <h5>Usuarios conectados</h5>
        <ConnectedUser />
      </Container>
    );
  }
}
