import './collection.style.scss';
import {selectCollection} from '../../components/redux/shop/shop-selector';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
function CollectionPage(props){
    const {items, title} = props.collection;
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);