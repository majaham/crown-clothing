import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from '../redux/shop/shop-selector';
import './collection-overview.style.scss';

function CollectionOverview(props){
    const {collections} = props;
   
    return (
        <div className='collection-overview'>
           { 
                collections.map(({id, ...otherProps})=>{
                    return (<CollectionPreview key={id} {...otherProps}/>)
                })
            }
        </div>
    );
}

const mapStateToProps = state => ({
    collections: selectCollectionForPreview(state)
});
export default connect(mapStateToProps)(CollectionOverview);