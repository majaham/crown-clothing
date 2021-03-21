import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCart } from '../redux/cart/cart-actions';
import { selectCartItemsCount } from '../redux/cart/cart-selector';
import './cart-icon.style.scss';

function ShoppingCartIcon({toggleCart, itemCount}){
    return(
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mapStateToProps = (state) => ({
    //itemCount: state.cart.cartItems.reduce((acc,item) => acc + item.quantity, 0)
    itemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(toggleCart()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon);