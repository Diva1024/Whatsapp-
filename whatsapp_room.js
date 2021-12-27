var firebaseConfig = {
      apiKey: "AIzaSyCIQNSYNwUZDC2SBsgCc3vaX0pbMHEakFA",
      authDomain: "practise-1-9f841.firebaseapp.com",
      databaseURL: "https://practise-1-9f841-default-rtdb.firebaseio.com",
      projectId: "practise-1-9f841",
      storageBucket: "practise-1-9f841.appspot.com",
      messagingSenderId: "614141033063",
      appId: "1:614141033063:web:614c0c69e3b96c25c572c2"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name;
function addRoom(){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"

});
localStorage.setItem("room_name", room_name);
window.location="whatsapp_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_names- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="whatsapp_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}