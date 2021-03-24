export const convertMapToCollections = (collectionsMap) => {
    return Object.keys(collectionsMap).map(key => collectionsMap[key]);
}