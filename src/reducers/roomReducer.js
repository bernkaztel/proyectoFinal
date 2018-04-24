
export default function(state={}, action){
    switch(action.type){
        case 'POST_ROOM': 
        return {
            ...state,
            chatRoom: action.payload
        }
        default: 
        return state;
    }
}