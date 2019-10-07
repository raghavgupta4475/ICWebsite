const firebase = require('firebase');
require('firebase/firestore');
require('firebase/auth');
    const firebaseApp = firebase.initializeApp(
      {
        apiKey: "AIzaSyCjGEn7e1DXkjmNWAgdKHLKWAS3PfsP4jo",
        authDomain: "ic-ordering-system-1f262.firebaseapp.com",
        databaseURL: "https://ic-ordering-system-1f262.firebaseio.com",
        projectId: "ic-ordering-system-1f262",
        storageBucket: "ic-ordering-system-1f262.appspot.com",
        messagingSenderId: "434017944509",
        appId: "1:434017944509:web:c0ed0728f2b63cf5"
      });

      const db=firebaseApp.firestore();
      const db2=firebaseApp.auth();
      const db3=firebaseApp.messaging();
      export default {db,db2};
      
        
    
