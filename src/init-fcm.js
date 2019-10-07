import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
// Project Settings => Add Firebase to your web app
messagingSenderId: "878679013233",
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
// Project Settings => Cloud Messaging => Web Push certificates
"BD2KNAaWnK0ZHPs6q7GVZ14veEqjesMp1erocJTuMctfaR1r2tdkXGXyQCSKuqUvxeHr4xoG63XWuIGeOlltz2o"
);
export { messaging };