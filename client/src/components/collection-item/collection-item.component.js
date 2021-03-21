import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../redux/cart/cart-actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.style.scss';

function CollectionItem({item, addItem}){
    const {name, price, imageUrl} = item;
    return(
        <div className='collection-item'>
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} className='custom-button' inverted>ADD TO CART</CustomButton>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addCartItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
