import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password: ''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({email:'', password:''});
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        this.setState({[name]: value});
    }
    render(){
        return (
            <div className='sign-in'>
                <h1>Already have an account?</h1>
                <span>You can sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} autoComplete={false}>
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
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;