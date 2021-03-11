import React from 'react';

import './sign-up.style.scss';
import { auth, createUserProfile } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
       
        if(password !== confirmPassword){
            alert("Password do not match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
           
            await createUserProfile(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h1 className='title'>I do not have an account</h1>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName}
                        label='Display Name' onChange={this.handleChange} required/>
                    <FormInput type='email' name='email' value={email}
                        label='Email'    onChange={this.handleChange} required/>
                    <FormInput type='password' name='password' value={password}
                        label='Password'    onChange={this.handleChange} required/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword}
                        label='Confirm Password'    onChange={this.handleChange} required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>              
            </div>
        );
    }
}

export default SignUp;