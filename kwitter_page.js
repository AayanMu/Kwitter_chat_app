

var firebaseConfig = {
      apiKey: "AIzaSyCzTvYxvMXaoTpnqvznb5cExEOFJ27mG9k",
      authDomain: "kwitter-8face.firebaseapp.com",
      databaseURL: "https://kwitter-8face-default-rtdb.firebaseio.com",
      projectId: "kwitter-8face",
      storageBucket: "kwitter-8face.appspot.com",
      messagingSenderId: "762230724871",
      appId: "1:762230724871:web:cfc46a5d8244ea6500cda2"
    };

    firebase.initializeApp(firebaseConfig);

    
function send(){
user_name= localStorage.getItem('username');
room_name= localStorage.getItem('rname');
msg= document.getElementById('sendtxt').value;
firebase.database().ref(room_name).push({
      username: user_name,
      like: 0,
      message:msg
      
})}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);

uname= message_data['username'];
umsg=message_data['message'];
ulike=message_data['like'];

usertag= "<h4> "+ uname+" <img class='user_tick' src='tick.png'>  </h4>"
msgtag= "<h4> "+ umsg+"   </h4>"
liketag= "<button class='btn btn-info' id="+firebase_message_id+" value="+ulike+" onclick='updatelikes(this.id)'>";  
st= " <span class='glyphicon glyphicon-thumbs-up'></span>Like: "+ulike+" </button>"

var r= usertag+ msgtag+ liketag+st;
document.getElementById('output').innerHTML += r;
      } });  }); }

      getData();


function logout(){
      localStorage.removeItem('rname');
      localStorage.removeItem('username');
      window.location= 'index.html';
 }
