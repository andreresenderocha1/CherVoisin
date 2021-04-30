import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBV0BJC1UuNvga4tx6IOmJ3Nnwv4xXEawc",
  authDomain: "cher-voisin-76453.firebaseapp.com",
  projectId: "cher-voisin-76453",
  storageBucket: "cher-voisin-76453.appspot.com",
  messagingSenderId: "759914996012",
  appId: "1:759914996012:web:67fa8714f38551181a0c89",
  measurementId: "G-M89H6JW5LZ",
};

export const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore(app);

export const TIME_STAMP = firebase.database.ServerValue.TIMESTAMP;

export const EventsRef = db.collection("events");
export const StreetsRef = db.collection("streets");
export const MessagesRef = db.collection("messages");

export { firebase };
