
export default function(state={}, action){
    switch(action.type){
        case 'POST_ID': 
        return {
            ...state,
            cardId: action.payload
        }
        default: 
        return state;
    }
}