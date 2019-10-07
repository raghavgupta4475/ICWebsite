import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase.js'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../src/store/reducer';

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then(function(registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
  const store=createStore(reducer);
const app=(
  <Provider store={store}>
<BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>
    
    
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
