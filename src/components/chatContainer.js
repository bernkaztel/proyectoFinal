import React, { Component } from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import JumbotronChat from "./reacstrap/JumbotronChat";
import WriteMessage from './chats/writeMessage'
import MessageViewer from './chats/messageViewer'
import ChatLateralBar from './chats/chatLateralBar'
import { getUser } from "../actions/userActions";
import {connect} from 'react-redux';

// imifconport io from 'socket.io-client';
import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';


class ChatContainer extends React.Component{
  constructor(props){
    
      super(props)
      this.state={ 
          messages:[]         
      }
      
      const io = sailsIOClient(socketIOClient);
      io.sails.url = 'http://216.224.183.21:1339';
      this.io = io;
      this.handleNewMessage=this.handleNewMessage.bind(this)
  }
 
 
 
   //convertir a arrow function todas las internas
    componentDidMount() {
      //obtenemos el usuario 
      this.props.getUser();
     
     // Instantiate the socket client (`io`)
     // (for now, you must explicitly pass in the socket.io client when using this library from Node.js)

     //const apiUrl="http://216.224.183.21:1339";
     
      
      this.io.socket.on('connect', function() {
      console.log(this.props)
       this.io.socket.get(`/chat/subscribe?roomName=${this.props.chatRoom.chatRoom}&user=${this.props.user.email}`, function(messages) {

        this.setState({message: messages})
        
       }.bind(this));
 
       this.io.socket.on('msg', function(newMessage) {
         console.log("new message",newMessage);
         this.setState({
             messages: this.state.messages.concat([newMessage]),
             
         });
         console.log("messages",this.state.messages);
        // io.socket.emit('msg',newMessage);
         
       }.bind(this));
       
     }.bind(this));
   }
   
   handleNewMessage(newMessage) {
 
   const user=newMessage.user;
     const messages = this.state.messages;
      this.setState({
         message: messages,
         user:user
     });
    
   }
 
 
 
    
    render(){
        return(
         
          <Container>
            <JumbotronChat />
            <Row>
              <Col md="8" className="d-block mx-auto">

                <MessageViewer messages={this.state.messages} />
                <WriteMessage socket={this.io} onNewMessage={this.handleNewMessage} />
              </Col>
              <Col md="4" className="d-block mx-auto">
                <ChatLateralBar />
              </Col>
            </Row>
          </Container>
        )
    }
       
   };
     
     

   function mapStateToProps(state, ownProps){
    return {
      user: state.user,
      userLoading: state.loading.user,
      chatRoom: state.chatRoom
    }
  }
  export default connect(mapStateToProps, { getUser })(ChatContainer);
  

  
