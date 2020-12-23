const ADD_TO_CART='ADD_TO_CART'
const DELETE_FROM_CART='DELETE_FROM_CART'

const initialState={cart:[]}

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

            default: return state
    }

}


export const addToCart=(payload)=>{
    debugger
    return {type:ADD_TO_CART,
    item:payload}
}

export const deleteFromCart=(payload)=>{
    return {type:DELETE_FROM_CART,
    payload}
}