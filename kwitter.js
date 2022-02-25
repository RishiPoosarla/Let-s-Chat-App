
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBL3k0HblqiA2a_6Z0gTMmXwEC_pki80JU",
    authDomain: "let-s-chat-app-1c2c2.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-1c2c2-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-1c2c2",
    storageBucket: "let-s-chat-app-1c2c2.appspot.com",
    messagingSenderId: "900508202046",
    appId: "1:900508202046:web:1ff4719d09de56423acd6f",
    measurementId: "G-CVXKQ50LWW"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    var username = document.getElementById("user_name").value;
    firebase.database().ref ("/").child(username).update({
        purpose: "adding user"
    });
}