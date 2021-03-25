import React from 'react';
import {Route} from 'react-router-dom';

import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStartAsync} from '../../components/redux/shop/shop-action';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../components/redux/shop/shop-selector';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { connect } from 'react-redux';
import LoadSpinner from '../../components/load-spinner/load-spinner.component';

const CollectionOverviewWithLoadSpinner = LoadSpinner(CollectionOverview);
const CollectionPageWithLoadSpinner = LoadSpinner(CollectionPage);

class ShopPage extends React.Component{
    componentDidMount(){
       this.props.fetchCollectionsStartAsync();       
    }
  
    render(){
        const {match,isCollectionFetching, isCollectionsLoaded} = this.props;
        
        return (<div className='shop-page'>       
            <Route exact path= {`${match.path}`} 
                render={(props) => <CollectionOverviewWithLoadSpinner isLoading={isCollectionFetching} {...props}/>} />
            <Route path={`${match.path}/:collectionId`} 
                render={(props)=> <CollectionPageWithLoadSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>      
        </div>);   
    }    
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps) (ShopPage);