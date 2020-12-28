const ADD_TO_CART='ADD_TO_CART'
const DELETE_FROM_CART='DELETE_FROM_CART'
const CHANGE_COUNT='CHANGE_COUNT'

const initialState={cart:[],total:0}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,cart:[...state.cart,action.item]
                
                
            }

        case DELETE_FROM_CART:
        
            return{
                ...state,
                cart:state.cart.filter(i=>i.id!==action.id)
            }

        case CHANGE_COUNT:{
       const total=action.payload.itemsValue*action.payload.price
        const count=action.payload.itemsValue
return {...state,

cart:state.cart.map(i=>{
    if(i.id===action.payload.id){
        return{...i,count,total}
    }
    return i
})}
        }

            default: return state
    }

}


export const addToCart=(payload)=>{
    debugger
    return {type:ADD_TO_CART,
    item:payload}
}

export const deleteFromCart=(id)=>{
    debugger
    return {type:DELETE_FROM_CART,
    id}
}

export const changeCount=(payload)=>{
    debugger
    return {type:CHANGE_COUNT,
    payload}
}