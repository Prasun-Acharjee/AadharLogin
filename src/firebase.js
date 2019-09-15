import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyB98pKTVVBKFrFSk82KvCeonlE9Cn1WlOw",
    authDomain: "user-page-ee169.firebaseapp.com",
    databaseURL: "https://user-page-ee169.firebaseio.com",
    projectId: "user-page-ee169",
    storageBucket: "user-page-ee169.appspot.com",
    messagingSenderId: "847018806185",
    appId: "1:847018806185:web:134960e31c29f4619d92b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;