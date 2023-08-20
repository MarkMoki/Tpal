let submit_data=document.getElementById("submit-data");
let forgetEmail=document.querySelector(".forgetEmail");

import {app} from "./firebase-config.js";
import { getAuth, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const auth = getAuth(app);

submit_data.addEventListener("click",()=>{
    sendPasswordResetEmail(auth,forgetEmail.value)
    .then(() => {
        forgetEmail="";

        alert("Congratulations!, A password reset email has been sent to your email address. Please check your inbox.");
        window.location.href = "index.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("Sorry!, Something went wrong or your email is not registered. Please check your email and try again.");
    })
    
})