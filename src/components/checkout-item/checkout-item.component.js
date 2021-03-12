import './checkout-item.style.scss';

export default function CheckoutItem({cartItem}){
    const {price, name, quantity, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <span className='remove-button'>&#10006;</span>
        </div>
    );
}