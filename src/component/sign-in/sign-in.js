import React from 'react';

import FormInput from '../form-input/form-input';

import './sign-in.scss'

import CustomButton from '../custom-button/custom-button';

import { auth,signInWithGoogle } from '../../firebase/firebase.utilis';


class SignIN extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handlSubmit=event=>{
        event.preventDefault();

        const {email,password}=this.state;

        try{
             auth.signInWithEmailAndPassword(email,password);

            this.setState({email:'',password:''});
        }catch(error){
            console.log(error);
        }
    }
    handleChange=event=>{
        const {value,name} =event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handlSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required/>
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='password' required/>
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign iN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIN>Sign iN with google </CustomButton>
                    </div>
                    

                    
                </form>
            </div>
        )
    }
}
export default SignIN;
