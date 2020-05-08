import * as actTypes from "../actions/actionTypes"
import Data from '../../Data'

const initValues = {
    addedItems: [],
    total: 0,
    totalItems: 0,
    searchedList:[],
    addedIds:[]
}

 const AddToCart=(state,action)=>{
    return{
        ...state,
        addedItems: [...state.addedItems,action.addedItem],
        total: state.total+action.addedItem.price,
        totalItems: state.totalItems+1,
        addedIds: [...state.addedIds,action.addedItem.id]

    
   }
   
}



const DelCartItem=(state,action)=>{
    let upCart=[]; let newTotal=0; let ids=[]
    state.addedItems.map(item=>{
        if(item.id!==action.id)  {upCart.push(item)
            ids.push(item.id)
            newTotal+=item.price
        }
    })
    return{
        ...state,
        addedItems:upCart,
        total: newTotal,
        totalItems: state.totalItems-1,
        addedIds:ids

    }
}

const SearchItems=(state,action)=>{
    let newList=[];
    Data.map(item=>{
        let itemtoBe= item.name.toLowerCase();
        
        const filter= action.query.toLowerCase();
        if(itemtoBe.includes(filter) || item.category.includes(filter)){
            newList.push(item);
        }


    })
    return({
        ...state,
        searchedList: newList,
    })

}
const ClearSearch=(state,action)=>{
    return({
        ...state,
        searchedList:[]
    })
}

 const CartReducer = (state = initValues, action) => {
    switch (action.type) {
        case actTypes.ADD_TO_CART:
            return AddToCart(state,action)
        case actTypes.DEL_CART_ITEM:
            return DelCartItem(state,action)
        case actTypes.SEARCH_DATA:
            return SearchItems(state,action)
        case actTypes.CLEAR_SEARCH_DATA:
            return ClearSearch(state,action)
        
        default:
            return state
    }
}

export default CartReducer;