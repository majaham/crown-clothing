import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartItemsTotal } from '../../components/redux/cart/cart-selector';
import StripeCheckoutButton from '../../components/stripe-checkout/stripe-checkout.component';
import './checkout.style.scss';

function CheckOutPage(props){
    const {cartItems, totalPrice} = props;
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='checkout-block'><span>Product</span></div>
                <div className='checkout-block'><span>Description</span></div>
                <div className='checkout-block'><span>Quantity</span></div>
                <div className='checkout-block'><span>Price</span></div>                
                <div className='checkout-block'><span>Remove</span></div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
            }
            <div className='total'>TOTAL PRICE: ${totalPrice}</div>
            <StripeCheckoutButton price={totalPrice}/>
            <div className='test-warning'>
                *Please use the following card details for test payments*
                <br/>
                4242 4242 4242 4242 - Exp: Future date - CVV: 123
            </div>           
        </div>
    );
}
const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    totalPrice: selectCartItemsTotal(state)
});

export default connect(mapStateToProps)(CheckOutPage);