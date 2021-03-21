import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
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
    collections: state.shop.collections
});
export default connect(mapStateToProps)(CollectionOverview);