import { itemsApi } from "../../API/API"

const SET_HOME_ITEMS='SET_HOME_ITEMS'




export const homeReducer=(state={},action)=>{

    switch(action.type){

        case SET_HOME_ITEMS:

            return{ ...state,items:action.items    }

    default:
        return state
    
    }
}


const setItems=(items)=>{
    return ({
        type:SET_HOME_ITEMS,
    items:items
    })
}



export const setHomeItems=()=>async(dispatch)=>{
    debugger
    const items=await itemsApi.getHomeItems()
    dispatch(setItems(items))

}
