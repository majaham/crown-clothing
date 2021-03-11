import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.compoonent';

import './signIn-signOut.style.scss';

export default function SigninSignout(){
    return (
        <div className='signin-signup'>
            <SignIn/>
            <SignUp/>
        </div>
    );
}