import React from 'react';
import SignIN from '../../component/sign-in/sign-in';

import SignUP from '../../component/sign-up/sign-up';

import './signinpage.scss'



const SigninPage=()=>(
    <div className='sign-in-and-sign-up'>
        <SignIN/>
        <SignUP/>
    </div>
)
export default SigninPage;