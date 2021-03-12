import { connect } from 'react-redux';
import { addCartItem, removeCartItem, clearCartItem } from '../redux/cart/cart-actions';
import './checkout-item.style.scss';

function CheckoutItem({cartItem, removeItem, addItem, clearItem}){
    const {price, name, quantity, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10006;</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch(removeCartItem(item)),
    clearItem: (item) => dispatch(clearCartItem(item)),
    addItem: (item) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);