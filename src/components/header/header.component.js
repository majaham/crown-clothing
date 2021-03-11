import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import ShoppingCartIcon from '../cart-icon/cart-icon.component';

import './header.style.scss';

function Header({currentUser, cartHidden}){
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>               
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                {
                    currentUser?
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>:
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }               
                <Link className='option' to='/contact'>CONTACT</Link>
                <ShoppingCartIcon/>
            </div> 
            {
                cartHidden? null:  <CartDropdown/> 
            }
                    
        </div>        
    );
}
const mapStateToProps = ({user, cart}) =>({
    currentUser: user.currentUser,
    cartHidden: cart.hidden
});
export default connect(mapStateToProps)( Header);