import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../components/redux/shop/shop-selector';

function ShopPage(props){
    const {collections} = props;
    return <div>
        {
            collections.map(({id, ...otherProps})=>{
                return (<CollectionPreview key={id} {...otherProps}/>)
            })
        }
    </div>    
}

const mapStateToProps = state => ({
    //collections: state.shop.collections
    collections: selectShopCollections(state)
});

export default connect(mapStateToProps) (ShopPage);