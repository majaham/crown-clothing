import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css'
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import {auth, createUserProfile} from './firebase/firebase.utils';
import SigninSignoutPage from './pages/signIn-signOut/signIn-signOut.component';

class App extends React.Component{
  unsubscribeAuth = null;
  unsubscribeSnapShot = null;
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        console.log('checked....');
        if(!userRef)return;
        console.log('checked....', userRef);
        this.unsubscribeSnapShot = userRef.onSnapshot(snapshot => {
          this.setState({currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }}); 
          console.log(this.state.currentUser);
        });         
      }       
    });
   
  }
  componentWillUnmount(){
    this.unsubscribeAuth();
    // this.unsubscribeSnapShot();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SigninSignoutPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
