const SET_STATE='SET_STATE'


const initialHomeState={1:'hello'}

export const homeReducer=(state=initialHomeState,action)=>{

    switch(action.type){
        case SET_STATE:
            return { ...state,2:'world'
    }
    }
}