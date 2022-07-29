
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


var firebaseConfig = {
    apiKey: "AIzaSyD3jF5xrRrpsSp4L2QHUvNEuQQRwx_3BE4",
    authDomain: "let-s-chat-web-appp.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-appp-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-appp",
    storageBucket: "let-s-chat-web-appp.appspot.com",
    messagingSenderId: "353756335473",
    appId: "1:353756335473:web:18348a90ec2f0518533ad0"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id);'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}

function redirectToRoomName(name) 
{ 
    console.log(name); 
    localStorage.setItem("room_name", name); 
    window.location = "chat_page.html"; 
} 

function logout()
{
      localStorage.removeItem("User_Name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

