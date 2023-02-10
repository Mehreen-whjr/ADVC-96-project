//YOUR FIREBASE LINKS
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


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
childData = childSnapshot.val(); 
if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}