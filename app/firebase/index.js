import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyC-beESNlt7FrONmFUKSqFBX8wkAF3t69I",
    authDomain: "reacttodo-b448a.firebaseapp.com",
    databaseURL: "https://reacttodo-b448a.firebaseio.com",
    storageBucket: "reacttodo-b448a.appspot.com",
    messagingSenderId: "1098959493909"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
