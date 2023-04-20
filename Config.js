import firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCBMCRKojAOPKT77W9yxTypg9JFctH7GNA",
    authDomain: "art-gallery-app-bda7e.firebaseapp.com",
    projectId: "art-gallery-app-bda7e",
    storageBucket: "art-gallery-app-bda7e.appspot.com",
    messagingSenderId: "389504796327",
    appId: "1:389504796327:web:43f142fbd82e89ff757d82"
  };

 firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();