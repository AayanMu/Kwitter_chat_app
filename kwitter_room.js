displayname= localStorage.getItem('username');
document.getElementById('wcome').innerHTML= "WELCOME "+ displayname;

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

//room_name= document.getElementById('roomtxtinput').value;
function addroom(){
      room_name= document.getElementById('roomtxtinput').value;
firebase.database().ref('/').child(room_name).update({
      purpose:'adding room name'
});
localStorage.setItem('rname', room_name );
window.location= "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       r= "<div id="+Room_names+" onclick='redirect(this.id)'> #"+Room_names+"</div> <hr>";
       document.getElementById('output').innerHTML +=r;
      
      });});}
getData();
 function redirect(room_name){
      localStorage.setItem('rname', room_name );
      window.location= "kwitter_page.html";   
 }


 function logout(){
      localStorage.removeItem('rname');
      localStorage.removeItem('username');
      window.location= 'index.html';
 }