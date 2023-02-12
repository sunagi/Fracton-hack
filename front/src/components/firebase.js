import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyCSVYjFsLeGV-YPjueD8qREWC3-wR3aSPE",
    authDomain: "fracton-d8f40.firebaseapp.com",
    projectId: "fracton-d8f40",
    storageBucket: "fracton-d8f40.appspot.com",
    messagingSenderId: "783777593601",
    appId: "1:783777593601:web:34c6b8d4cd1fdb6d214300"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth};

  