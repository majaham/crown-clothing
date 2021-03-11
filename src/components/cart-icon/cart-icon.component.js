import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCart } from '../redux/cart/cart-actions';
import './cart-icon.style.scss';

function ShoppingCartIcon({toggleCart}){
    return(
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(toggleCart()) 
});

export default connect(null, mapDispatchToProps)(ShoppingCartIcon);