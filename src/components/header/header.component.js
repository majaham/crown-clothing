import React from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import ShoppingCartIcon from '../cart-icon/cart-icon.component';

import {HeaderContainer, LogoContainer, OptionsContainer,
OptionDiv, OptionLink} from './header.styles';

// import './header.style.scss';

function Header({currentUser, cartHidden}){
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>               
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                {
                    currentUser?
                    <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>:
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }               
                <OptionLink to='/contact'>CONTACT</OptionLink>
                <ShoppingCartIcon/>
            </OptionsContainer> 
            {
                cartHidden? null:  <CartDropdown/> 
            }
                    
        </HeaderContainer>        
    );
}
const mapStateToProps = ({user, cart}) =>({
    currentUser: user.currentUser,
    cartHidden: cart.hidden
});
export default connect(mapStateToProps)( Header);