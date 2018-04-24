import React, { Component } from "react";
import { Button } from "reactstrap";
import Jumbotron from "./reacstrap/Jumbotron";
import Form from "./reacstrap/Form";
import { Container, Row, Col } from "reactstrap";
import { Media } from "reactstrap";
import FormCard from './reacstrap/FormCard'
import {connect} from 'react-redux'
import Navbar from '../components/reacstrap/Navbar'

import Style from './style.css'

import { getUser } from "../actions/userActions";
import axios from 'axios';


class Registration extends Component {
  constructor() {
    super();
    this.state= {
      userId: null
    }
  }
  
  componentDidMount() {
    this.props.getUser()

  
  }

  // componentWillReceiveProps(){
  //   console.log(this.props.user.email);
  //   this.pushSample(this.props.user.email)
  // }


  pushSample(user) {
    console.log("user",user);
    axios.post('http://216.224.183.21:1339/user', {
      username: user,
    })
    .then(res => {
      this.setState({userId: res.data.condos.id})
      console.log("guardado en estado",this.state.userId);
    }).catch( (err) =>{
      console.log(err);
    })
  }


  render() {
    return (
      <Container className="background-one">
        <Navbar />
        <h1 className="text-center titles">Personaliza tu perfil</h1>
        <Row>
          <Col md={{ size: 5, offset: 1 }}>
            <Form />
          </Col>
          <Col style={{ marginTop: "20px", marginLeft: "70px" }}>
            <img
              src="https://dummyimage.com/350x350/d1d1d1/000000"
              alt="Generic placeholder image"
            />
          </Col>
     
        </Row>

        <h1 className="text-center titles">Método de pago</h1>

        <Row>
          <Col>
        <FormCard/>
        </Col>
        <Col>
        <Jumbotron/>
        </Col>
        </Row>
      </Container>
    );
  }
}


function mapStateToProps(state, ownProps){
  return {
    user: state.user,
    userLoading: state.loading.user,
  }
}
export default connect(mapStateToProps, { getUser })(Registration);
