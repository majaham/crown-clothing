import './cart-dropdown.style.scss';
import CustomButtom from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../redux/cart/cart-selector';

function CartDropdown({cartItems}){
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                   cartItems? cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>): null
                }
            </div>
            <CustomButtom>GO TO CHECKOUT</CustomButtom>
        </div>
    );
}
const mapStateToProps = (state) => ({
    //cartItems: state.cart.cartItems
    cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);