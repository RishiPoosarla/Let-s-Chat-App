
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    var username = document.getElementById("user_name").value;
    firebase.database().ref ("/").child(username).update({
        purpose: "adding user"
    });
}