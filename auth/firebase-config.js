  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
        apiKey: "AIzaSyD2cYmSvwxZLB-Q2auE5xQ5MM8C2AH0OvI",
        authDomain: "travelpal-269a9.firebaseapp.com",
        databaseURL: "https://travelpal-269a9-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "travelpal-269a9",
        storageBucket: "travelpal-269a9.appspot.com",
        messagingSenderId: "3475429458",
        appId: "1:3475429458:web:d3e44de25baa85e051a78b",
        measurementId: "G-5JYKFYKNX6"
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const analytics = getAnalytics(app);
    export const auth = getAuth();
    console.log(app);

    