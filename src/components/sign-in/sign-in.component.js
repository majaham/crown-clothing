import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password: ''
        }
    }
    handleSubmit = async(e) =>{
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        } catch (error) {
            console.log(error.message);
        }       
    }
    handleChange = (e) => {
        const {name, value} = e.target;       
        this.setState({[name]: value});
    }
    render(){
        return (
            <div className='sign-in'>
                <h1>Already have an account?</h1>
                <span>You can sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' 
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}  
                        label='Email'
                        required/>
                    
                    <FormInput type='password' 
                        name='password' 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label='Password'
                        required/>       
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;