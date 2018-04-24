import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { getUser } from "../../actions/userActions";
import {connect} from 'react-redux';




class NewMessage extends React.Component{
  render(){
      return (
          <li className="ChatMessage" key={this.props.index}>
            <span className="author"><strong>{this.props.userdis}</strong> dice:</span>
            <span className="message">"{this.props.message}"</span>
          </li>
          );
  }





  
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user,
    userLoading: state.loading.user,
  }
}
export default connect(mapStateToProps, { getUser })(NewMessage);