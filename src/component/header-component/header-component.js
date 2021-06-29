import React from 'react';

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utilis';


import {ReactComponent as Logo} from '../../asset/crown.svg'
import './header.scss'

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header=({currentUser,hidden   })=>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>Sign out</div>
                :
                <Link div className='option' to='/signin'>Sign in</Link>
            }
            <CartIcon/>
            
        </div>
        {
            hidden?null:<CartDropdown/>
        }
        

    </div>
);

const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);