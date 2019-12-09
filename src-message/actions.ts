import { Message, ChatActionTypes, SEND_MESSAGE, DELETE_MESSAGE, SystemState, SystemActionType, UPDATE_SESSION } from "./types";

export const sendMessage  = (newMessage : Message):ChatActionTypes =>{ 

    return {
        type : SEND_MESSAGE  , 
        payload : newMessage
    }


 } 

 export const deleteMessage = (timestamp : number) : ChatActionTypes => {

    return {
        type : DELETE_MESSAGE  , 
        meta  : {
            timestamp
        }
    }
}

export const updateSession = (newSession : SystemState ): SystemActionType => { return {type: UPDATE_SESSION , payload :newSession }}