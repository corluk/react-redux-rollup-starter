import { ChatState, ChatActionTypes, SEND_MESSAGE, DELETE_MESSAGE, SystemState, UPDATE_SESSION, SystemActionType } from "./types";

const chatInitState : ChatState = {
    messages :  []
} 

export const chatReducer  = (state  = chatInitState , action : ChatActionTypes ) :ChatState => {

    switch(action.type){
        case SEND_MESSAGE  : 
            return { messages :[...state.messages,action.payload] }
        case DELETE_MESSAGE : 
            return { 

                messages : state.messages.filter(message => message.timestamp !== action.meta.timestamp)
             }
        default : 
             return state  
    }
}


const systemInitState : SystemState = {
    loggedIn : false 
    , session : "" 
    , userName : ""
}


export const systemReducer = (state = systemInitState , action : SystemActionType ) => {

    switch(action.type) {
        case UPDATE_SESSION : {
            return {...state , ...action.payload}
        }
        default : 
        return state 
    }
}
