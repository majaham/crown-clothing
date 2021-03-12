import './cart-item.style.scss';

function CartItem(props){
    const {name,price,quantity,imageUrl} = props.cartItem;
    return(
        <div className='cart-item'>
            <img src={imageUrl} alt={name}/>
            <div className='cart-item-details'>
                <span className='name'>{name}</span><br/>
                <span className='price'>${price} x {quantity}</span>
            </div>            
        </div>
    );    
}

export default CartItem;