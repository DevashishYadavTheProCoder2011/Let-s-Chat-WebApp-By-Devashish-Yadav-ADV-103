
var firebaseConfig = {
  apiKey: "AIzaSyDC2NLuFxiDn4h4NzKb45li2S_JT9d3c3E",
  authDomain: "let-s-chat-app-3b93c.firebaseapp.com",
  databaseURL: "https://let-s-chat-app-3b93c-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-app-3b93c",
  storageBucket: "let-s-chat-app-3b93c.appspot.com",
  messagingSenderId: "24867079015",
  appId: "1:24867079015:web:7566b14237567d229865c2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";


 
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "chat_room.html";
}


firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});


