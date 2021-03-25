import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollection = memoize(collectionId => createSelector(
    [selectShopCollections],
    (collections) => collections? collections[collectionId]: null
));

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    (collections) => collections? Object.keys(collections).map(colKey => collections[colKey]): []
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)