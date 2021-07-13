import React from 'react';

import {Link} from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selector';

import { selectCurrentUser } from '../../redux/user/user-selector';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utilis';

import { HeaderComponent, LogoContainer,OptionsContainer,OptionLinkContainer} from './header.style';


import {ReactComponent as Logo} from '../../asset/crown.svg'


import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header=({currentUser,hidden   })=>(
    <HeaderComponent>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLinkContainer to='/shop'>
                SHOP
            </OptionLinkContainer>
            <OptionLinkContainer to='/shop'>
                CONTACT
            </OptionLinkContainer>
            {
                currentUser?
                <OptionLinkContainer as='div' onClick={()=>auth.signOut()}>Sign out</OptionLinkContainer >
                :
                <OptionLinkContainer div className='option' to='/signin'>Sign in</OptionLinkContainer>
            }
            <CartIcon/>
            
        </OptionsContainer>
        {
            hidden?null:<CartDropdown/>
        }
    </HeaderComponent>
        
        


);

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);