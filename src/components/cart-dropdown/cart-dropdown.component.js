import './cart-dropdown.style.scss';
import CustomButtom from '../custom-button/custom-button.component';

function CartDropdown(){
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButtom>GO TO CHECKOUT</CustomButtom>
        </div>
    );
}
export default CartDropdown;