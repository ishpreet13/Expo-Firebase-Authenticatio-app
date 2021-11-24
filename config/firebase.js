import firebase from 'firebase/compat/app';
import {} from 'firebase/compat/auth';
import Constants from 'expo-constants';
// import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const firebaseConfig = {
  // apiKey: "AIzaSyDFMGwmfSP52EkTdeOb2G2xd1qMteaO63Y",
  // authDomain: "recycle-helper-1c070.firebaseapp.com",
  // projectId: "recycle-helper-1c070",
  // storageBucket: "recycle-helper-1c070.appspot.com",
  // messagingSenderId: "284082424990",
  // appId: "1:284082424990:web:7879ba21f26fcae776ff8f",
  // measurementId: "G-1JJ5S7B3R8"

  apiKey: "AIzaSyCf1ywZL9fWodTss4IwBLq1_yCsklgwxqs",
  authDomain: "expo-practice-firebase-sdk.firebaseapp.com",
  projectId: "expo-practice-firebase-sdk",
  storageBucket: "expo-practice-firebase-sdk.appspot.com",
  messagingSenderId: "535632227368",
  appId: "1:535632227368:web:b26ddf9b2f61bb595f191d"



  // apiKey: Constants.manifest.extra.apiKey,
  // authDomain: Constants.manifest.extra.authDomain,
  // projectId: Constants.manifest.extra.projectId,
  // storageBucket: Constants.manifest.extra.storageBucket,
  // messagingSenderId: Constants.manifest.extra.messagingSenderId,
  // appId: Constants.manifest.extra.appId
};

// console.log("apiKey is " + Constants.manifest.extra.apiKey);
console.log("apiKey is " + firebaseConfig.apiKey);
const Firebase = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(Firebase);

export default Firebase;