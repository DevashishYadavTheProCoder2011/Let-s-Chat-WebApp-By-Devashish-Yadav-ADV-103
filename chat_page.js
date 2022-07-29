
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


    room_name = localStorage.getItem("room_name");
    document.getElementById("room_name").innerHTML = "You Are In   " + room_name + "!";



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html"
      
      }
      function back(){
            localStorage.removeItem("room_name");
            window.location= "chat_room.html"
            
            }














            function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
                  Room_names = childKey;
                 //Start code
                 console.log("Room Name -"+ Room_names);
                 row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id) '>#"+Room_names+"</div><hr>";           
                 document.getElementById("output").innerHTML +=row    ;    
                 
                 //End code
                 });});}
      function send(){
            msg= document.getElementById("msg").value;
            firebase.database().ref(room_name).push  (
                  {

                        name:user_name,
                        message:msg,
                        like:0
                  }
            );
            document.getElementById("msg").value="";
      }