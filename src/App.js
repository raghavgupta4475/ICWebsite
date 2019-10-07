import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
// import {sendTokenToServer,updateUIForPushEnabled,updateUIForPushPermissionRequired,setTokenSentToServer,showToken} from 'firebase/firebase-messaging'
import LoginPage from './views/LoginPage/LoginPage';
import OptionsPage from './views/OptionsPage/OptionsPage';
import {Route,BrowserRouter} from 'react-router-dom';
import ViewData from 'views/ViewData/ViewData.js';
import ManageAccounts from 'views/ManageAccounts/ManageAccounts.js'
import CreditDetails from 'views/CreditDetails/Creditdetails';
import CurrentOrders from 'views/CurrentOrders/CurrentOrders';
import AddStudent from 'views/AddStudent/AddStudent';
import ViewDetails from 'views/ViewDetails/ViewDetails.js';
import OrderFood from 'views/OrderFood/OrderFood.js'
import Cart from '../src/views/OrderFood/cart/Cart';
import Status from '../src/views/OrderFood/Status/Status'

function App() {
  useEffect(()=>{
    console.log("App.js")
  })
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/optionspage" exact component={OptionsPage}/>
        <Route path="/optionspage/ViewData" exact component={ViewData}/>
        <Route path="/optionspage/ManageAccounts" exact component={ManageAccounts}/>
        <Route path="/optionspage/CreditDetails" exact component={CreditDetails}/>
        <Route path="/optionspage/CurrentOrders" exact component={CurrentOrders}/>
        <Route path="/optionspage/ManageAccounts/AddStudent" exact component={AddStudent}/>
        <Route path="/optionspage/ManageAccounts/ViewDetails" exact component={ViewDetails}/>
        <Route path="/optionspage/Order" exact component={OrderFood}/>
        <Route path="/optionspage/Order/cart" exact component={Cart}/>
        <Route path="/optionspage/FoodStatus" exact component={Status}/>
      </BrowserRouter>
  
    </div>
  
  );
}

export default App;
