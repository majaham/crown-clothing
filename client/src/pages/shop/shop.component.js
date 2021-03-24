import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import {convertCollectionsToMap, firestore} from '../../firebase/firebase.utils';
import { updateCollections } from '../../components/redux/shop/shop-action';
import { connect } from 'react-redux';
import LoadSpinner from '../../components/load-spinner/load-spinner.component';

const CollectionOverviewWithLoadSpinner = LoadSpinner(CollectionOverview);
const CollectionPageWithLoadSpinner = LoadSpinner(CollectionPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
       this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
           const newCollections = convertCollectionsToMap(snapshot);           
            this.props.collectionsUpdate(newCollections);
            this.setState({loading: false});
        });
    }
    componentWillUnmount(){
        this.unsubscribeFromSnapshot();
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (<div className='shop-page'>       
            <Route exact path= {`${match.path}`} 
                render={(props) => <CollectionOverviewWithLoadSpinner isLoading={loading} {...props}/>} />
            <Route path={`${match.path}/:collectionId`} 
                render={(props)=> <CollectionPageWithLoadSpinner isLoading={loading} {...props}/>}/>      
        </div>);   
    }    
}
const mapDispatchToProps = (dispatch) => ({
    collectionsUpdate: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps) (ShopPage);