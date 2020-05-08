import * as actTypes from './actionTypes'

export const AddToCart= (id,name,price)=>{
    let addedItem={id,name,price,quantity:1}
    return{
        type: actTypes.ADD_TO_CART,
        addedItem,
    }
}

export const DelCartItem=(id)=>{
    return{
        type: actTypes.DEL_CART_ITEM,
        id,
    }
}

export const SearchItems=(query)=>{
    return{
        type: actTypes.SEARCH_DATA,
        query,
    }
}

export const ClearSearch=()=>{
    return{
        type: actTypes.CLEAR_SEARCH_DATA,
        
    }
}

