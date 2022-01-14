import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBXYrWnJ5XAc1hY7sTzIvLW-tJZ-43csik",
  authDomain: "snooze-153db.firebaseapp.com",
  projectId: "snooze-153db",
  storageBucket: "snooze-153db.appspot.com",
  messagingSenderId: "679901174138",
  appId: "1:679901174138:web:d19b7dfe0bf08f7ad61ec3",
  measurementId: "G-VCLGX3TF9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

export { authentication };
