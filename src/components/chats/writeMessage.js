import React, { Component } from "react";
import {  FormGroup, Label, Input } from 'reactstrap';
import { getUser } from "../../actions/userActions";
import {connect} from 'react-redux';
import { write } from "fs";




class writeMessage extends React.Component{
  
  
      handleNewMessage=(event)=> {
          event.preventDefault();
          const message = this.refs.message.value;
         // console.log(author)
         console.log('codes')
         
        this.props.socket.socket.post('/chat/broadcast',{ roomName: `${this.props.chatRoom.chatRoom}`,user:this.props.user.displayName,message:message },
          function(data,status){
              console.log(data);
          })
          this.props.onNewMessage({user: this.props.user.displayName, message: message});
          this.refs.message.value = '';
        }
      
      
      
      render(){
          return(
           
              <form className="ChatForm" onSubmit={this.handleNewMessage}>
             
          <span><strong>{this.props.user.displayName}</strong> dice:</span>
          <br/>
          <Label for="exampleText">Coloca aquí tu mensaje</Label>
          <input type="text" placeholder="message..." className="text" ref="message" />
          <input type="submit" value="Send" />
            </form>
            
          )
      }
  }
  

  function mapStateToProps(state, ownProps){
    return {
      user: state.user,
      userLoading: state.loading.user,
      chatRoom: state.chatRoom
    }
  }
  export default connect(mapStateToProps, { getUser })(writeMessage);


  

  