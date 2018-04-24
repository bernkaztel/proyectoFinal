import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import { getUser } from "../../actions/userActions";
import axios from 'axios';
import {postId} from '../../actions/userActions'


class FormUser extends React.Component {
  constructor(){
    super();
    this.onListNameChange = this.onListNameChange.bind(this);
    this.onListEmailChange = this.onListEmailChange.bind(this);
    this.onListPhoneChange = this.onListPhoneChange.bind(this);
    this.pathSample = this.pathSample.bind(this);
    this.state = {
      name: "",
      email:"",
      phone: "",
      id: ""
    }
  }
  
  componentDidMount(){
    this.props.getUser()
  }
  
    //Cada vez que el input cambie, el valor se va a almacenar en el estado.
    onListNameChange(event) {
      console.log(event.target.value)
      //Sacamos una copia del estado.
      const nameStateCopy = event.target.value;
      //Enviamos de vuelta el estado
      this.setState({ name: nameStateCopy });
    }


    
  pathSample( name, email, phone){ 

    console.log("funcion ejecutada");
    console.log(this.props.user.email);
    axios.post('http://216.224.183.21:1339/user', {
      username: this.props.user.email
    })
    .then(res => {
      console.log("res",res);
      console.log(res.data.id);
      this.props.postId(res.data.id);
      axios.patch('http://216.224.183.21:1339/user/'+res.data.id, {
        "fullName": name,
      "email": email,
      "phone": phone
      })
      .then(res => {
        console.log(res);
      });
    })
  }

        //Cada vez que el input cambie, el valor se va a almacenar en el estado.
        onListEmailChange(event) {
          console.log(event.target.value)
          //Sacamos una copia del estado.
          const emailStateCopy = event.target.value;
          //Enviamos de vuelta el estado
          this.setState({ email: emailStateCopy });
        }

            //Cada vez que el input cambie, el valor se va a almacenar en el estado.
    onListPhoneChange(event) {
      console.log(event.target.value)
      //Sacamos una copia del estado.
      const phoneStateCopy = event.target.value;
      //Enviamos de vuelta el estado
      this.setState({ phone: phoneStateCopy });
    }

   

  render() {
    return (
      <Form className="form-perfil">
        <FormGroup>

          <Label className="font-family font-color" for="exampleEmail">Nombre</Label>
          <Input type="email" name="email" id="exampleEmail"   onChange={this.onListNameChange}/>
        </FormGroup>
        <FormGroup>
          <Label className="font-family font-color" for="examplePassword">Email</Label>
          <Input name="text" id="examplePassword" onChange={this.onListEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label className="font-family font-color" for="exampleFile">Teléfono</Label>
          <Input name="text" id="examplePassword"  onChange={this.onListPhoneChange} />
        </FormGroup>
        <br/>
        <button type="button" onClick={ () => { this.pathSample(this.state.name, this.state.email, this.state.phone)}}>Enviar datos</button>

      </Form>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    userLoading: state.loading.user
  };
}
export default connect(mapStateToProps, { getUser, postId })(FormUser);

