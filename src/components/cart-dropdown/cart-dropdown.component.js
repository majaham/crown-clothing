import './cart-dropdown.style.scss';
import CustomButtom from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../redux/cart/cart-selector';
import { withRouter } from 'react-router';
import { toggleCart } from '../redux/cart/cart-actions';

function CartDropdown({cartItems, history, dispatch}){
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                   cartItems.length? cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>): 
                   <span className='cart-empty-message'>Your cart is empty</span>
                }
            </div>
    <CustomButtom onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCart());
            }}>GO TO CHECKOUT</CustomButtom>
        </div>
    );
}
const mapStateToProps = (state) => ({
    //cartItems: state.cart.cartItems
    cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown));