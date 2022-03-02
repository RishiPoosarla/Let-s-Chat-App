function logout(){
      window.location = "index.html"
}

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
      console.log("room names:" + Room_names);
        row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
  getData();
  function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}