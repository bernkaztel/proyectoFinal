import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAABcaPkljxsqWgifTPb7tNMDe03LWeMeA",
    authDomain: "amigazos-2bdb0.firebaseapp.com",
    databaseURL: "https://amigazos-2bdb0.firebaseio.com",
    projectId: "amigazos-2bdb0",
    storageBucket: "",
    messagingSenderId: "935160825574"
  };


  firebase.initializeApp(config)
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
