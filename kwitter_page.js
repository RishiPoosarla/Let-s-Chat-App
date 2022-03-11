//YOUR FIREBASE LINKS
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
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html" ;
}
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
  });
  document.getElementById("msg").value = "";
}
