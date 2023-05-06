function login(){
    var Uname= document.getElementById('Login').value;  
    localStorage.setItem('username', Uname);
    window.location= "kwitter_room.html";
}