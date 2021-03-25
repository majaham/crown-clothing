import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {setCurrentUser} from './components/redux/user/user-actions';

import './App.css'
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import {auth, createUserProfile} from './firebase/firebase.utils';
import SigninSignoutPage from './pages/signIn-signOut/signIn-signOut.component';
import { connect } from 'react-redux';

import CheckOutPage from './pages/checkout/checkout.component';

class App extends React.Component{
  unsubscribeAuth = null;
  unsubscribeSnapShot = null;
 
  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);        
            
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });         
        });         
      }
      this.props.setCurrentUser(userAuth);  
      // addCollectionAndDocuments('collections', this.props.collectionArray);     
    });
   
  }
  componentWillUnmount(){
    this.unsubscribeAuth();
    // this.unsubscribeSnapShot();
  }
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckOutPage}/>
          <Route exact path='/signin' 
            render={() => this.props.currentUser? (<Redirect to='/'/>): (<SigninSignoutPage/>)}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user, shop}) => ({
  currentUser: user.currentUser,
  // collectionArray: shop.collections
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
