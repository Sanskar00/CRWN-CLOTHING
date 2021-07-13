import ShopActionTypes from "./shop.types.action";

export const updateCollections=(collectionsMap)=>({
    type:ShopActionTypes.UPDATE_COLLECTION,
    payload:collectionsMap
})