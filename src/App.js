import React from 'react';
import './App.css';
import { connect } from 'react-redux';


import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import Homepage from './page/homepage/homepage'
import ShopPage from './page/shop/shopPage';
import Header from './component/header-component/header-component';
import SigninPage from './page/signin/signinpage';
import CheckoutPage from './page/checkout/checkout';
import { auth,createUserProfileDocument } from './firebase/firebase.utilis';
import userEvent from '@testing-library/user-event';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user-selector';




class App extends React.Component {
  
  unsubrcibeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser,}=this.props;
    this.unsubrcibeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      createUserProfileDocument(userAuth);
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
        setCurrentUser({
      
             id:snapShot.id,
             ...snapShot.data()
         })
        })
      }
      setCurrentUser(userAuth);
      
    });
  }
  componentWillUnmount(){
    this.unsubrcibeFromAuth();
  }
  render(){
    return (
      <Router>
        <div className="App">
        <Header />
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route path='/signin' render={()=> this.props.currentUser?(<Redirect to='/'/>):(<SigninPage/>)}/>
      
        </Switch>
        
      </div>
      </Router>
      
    );

  }
    
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
})

const mapDispatchToProps=dispact=>({
  setCurrentUser : user=> dispact(setCurrentUser(user))
})

export default connect(
  mapStateToProps,mapDispatchToProps)(App);
