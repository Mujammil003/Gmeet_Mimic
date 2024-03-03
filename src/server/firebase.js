import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCMsFZi0za0T9BbOHJaCATv0sqXYqzeDFg",
  databaseURL: "https://meet-clone-50399-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", `?id=${firepadRef.key}`);
}

export default firepadRef;
