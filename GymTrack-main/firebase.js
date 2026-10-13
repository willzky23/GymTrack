
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD26OrgcvYEikB8cBtvl0BHj9ka9cTc2Ro",
    authDomain: "gymtrack-8e98a.firebaseapp.com",
    databaseURL: "https://gymtrack-8e98a-default-rtdb.firebaseio.com",
    projectId: "gymtrack-8e98a",
    storageBucket: "gymtrack-8e98a.firebasestorage.app",
    messagingSenderId: "67982548342",
    appId: "1:67982548342:web:677231a00307e8c30e2e57"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
