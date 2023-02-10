const firebaseConfig = {
    apiKey: "AIzaSyDTnpSHyRCIHGaR8Z9jaD-eTI5FhRZH8Ks",
    authDomain: "kiwtter-web-app.firebaseapp.com",
    databaseURL: "https://kiwtter-web-app-default-rtdb.firebaseio.com",
    projectId: "kiwtter-web-app",
    storageBucket: "kiwtter-web-app.appspot.com",
    messagingSenderId: "764345820523",
    appId: "1:764345820523:web:2756f0df2868bcafa6982e",
    measurementId: "G-3MFRDQGGHS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwiter_page.html";
  }


function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}