import { auth, googleProvider } from "../firebaseconfig";
import { GET_USER, USER_STATUS, POST_ID, POST_ROOM } from "./actionTypes";
import axios from "axios";

export function getUser() {
  return dispatch => {
    //Show loading status to true
    dispatch({
      type: USER_STATUS,
      payload: true
    });

    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
      dispatch({
        type: USER_STATUS,
        payload: false
      });
    });
  };
}

export function postId(id) {
  return dispatch => {
    dispatch({
      type: POST_ID,
      payload: id
    });
  };
}

export function postRoom(room) {
  return dispatch => {
    dispatch({
      type: POST_ROOM,
      payload: room
    });
  };
}

export function googleLogin() {
  return dispatch => {
    auth.signInWithPopup(googleProvider).then((user) => {
      console.log(user.user.email);
      window.location.replace("/registration");
    //   axios
    //     .get(
    //       `http://216.224.183.21:1339/user?where={"username":"${user.user.email}"}`)
    //     .then(res => {
    //       console.log("buscado", res);
    //       if (res.data === []) {
    //         window.location.replace("/registration");
    //       } else { 
    //            window.location.replace("/registration");
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });

    });
  };
}

export function logout() {
  return dispatch => {
    auth.signOut();
  };
}
