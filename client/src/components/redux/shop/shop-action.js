import {actionTypes} from '../action-types';
import {convertCollectionsToMap, firestore} from '../../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: actionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: actionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get()
            .then(snapshot => {
                const newCollections = convertCollectionsToMap(snapshot);
                dispatch(fetchCollectionSuccess(newCollections));
            }).catch(err => dispatch(fetchCollectionsFailure(err)))
    }
}