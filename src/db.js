import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBF_oFCp3KxpLLVdWwUUslIt_57gbs_iY0",
  authDomain: "vue-chat-e0098.firebaseapp.com",
  projectId: "vue-chat-e0098",
  storageBucket: "vue-chat-e0098.appspot.com",
  messagingSenderId: "152912577635",
  appId: "1:152912577635:web:01ed7219c7d346586ca456",
  databaseURL:
    "https://vue-chat-e0098-default-rtdb.europe-west1.firebasedatabase.app/",
};

const db = firebase.initializeApp(firebaseConfig);

export default db;
