import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { postRoom } from "../../actions/userActions";
import { withRouter } from "react-router-dom";


class Example extends React.Component {
  constructor() {
    super();
    this.getToken = this.getToken.bind(this);
    this.sendToken = this.sendToken.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onCVCChange = this.onCVCChange.bind(this);
    this.changeValue = this.changeValue.bind(this);

    this.state = {
      number: "",
      name: "",
      exp_year: "",
      exp_month: "",
      cvc: "",
      token: null
    };
  }

  //Cada vez que el input cambie, el valor se va a almacenar en el estado.
  onNameChange(event) {
    //Sacamos una copia del estado.
    const nameStateCopy = event.target.value;
    //Enviamos de vuelta el estado
    this.setState({ name: nameStateCopy });
  }
  //Cada vez que el input cambie, el valor se va a almacenar en el estado.
  onNumberChange(event) {
    //Sacamos una copia del estado.
    const nameStateCopy = event.target.value;
    //Enviamos de vuelta el estado
    this.setState({ number: nameStateCopy });
  }
  //Cada vez que el input cambie, el valor se va a almacenar en el estado.
  onYearChange(event) {
    //Sacamos una copia del estado.
    const nameStateCopy = event.target.value;
    //Enviamos de vuelta el estado
    this.setState({ exp_year: nameStateCopy });
  }
  //Cada vez que el input cambie, el valor se va a almacenar en el estado.
  onMonthChange(event) {
    //Sacamos una copia del estado.
    const nameStateCopy = event.target.value;
    //Enviamos de vuelta el estado
    this.setState({ exp_month: nameStateCopy });
  }
  onCVCChange(event) {
    //Sacamos una copia del estado.
    const nameStateCopy = event.target.value;
    //Enviamos de vuelta el estado
    this.setState({ cvc: nameStateCopy });
  }

  async getToken() {
    console.log("la función se ejecuta");
    let number = this.state.number;
    let name = this.state.name;
    let exp_year = this.state.exp_year;
    let exp_month = this.state.exp_month;
    let cvc = this.state.cvc;
    const data = {
      card: {
        number: number,
        name: name,
        exp_year: exp_year,
        exp_month: exp_month,
        cvc: cvc,
        selectedOption: null
      }
    };

    console.log(data);

    let stfun = this.sendToken;
    let path = this.props.history

    await window.Conekta.Token.create(
      data,
      function(token) {
        console.log(token);
        stfun(token);
        let token2 = token.id;
        path.push('/chat')
      },
      function(err) {
        console.error(err);
      }
    );
  }

  changeValue(event) {
    const room =(event.target.value);
    this.props.postRoom(room);
  }

  sendToken(token) {
    let userId = this.props.cardId;
    axios
      .post("http://216.224.183.21:1339/payment", {
        token: token,
        amount: "20000",
        user: userId,
        service: "vip"
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Form className="formCard">
          <FormGroup>
            <Label for="exampleEmail">Nombre</Label>
            <Input
              type="email"
              name="email"
              onChange={this.onNameChange}
              id="exampleEmail"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Número de tarjeta</Label>
            <Input
              type="cardnumber"
              name="password"
              onChange={this.onNumberChange}
              id="examplePassword"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">CVV</Label>
            <Input
              type="cvv"
              name="number"
              onChange={this.onCVCChange}
              id="cvv"
            />
            <Label for="examplePassword">Fecha de expiración (AÑO)</Label>
            <Input
              type="text"
              onChange={this.onYearChange}
              name="password"
              id="date"
            />
            <Label for="examplePassword">Fecha de expiración (MES)</Label>
            <Input
              type="text"
              onChange={this.onMonthChange}
              name="password"
              id="date"
            />
          </FormGroup>
        </Form>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          
          <Input type="select" name="select" id="exampleSelect" onChange={this.changeValue}>
            <option
              value="normal"
             
            >
              Sala Estándar
            </option>
            <option
              value="plus"
              
            >
              Sala Plus
            </option>
            <option
              value="vip"
            
            
            >
              Sala VIP
            </option>
          </Input>
        </FormGroup>
        <button type="button" onClick={this.getToken}>
          Submit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cardId: state.cardId.cardId,
    getRoom: state.chatRoom
  };
}
export default withRouter(connect(mapStateToProps, { postRoom })(Example));
