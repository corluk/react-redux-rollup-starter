import {Reducer} from "redux"

export interface A {
    value : string 
}

export const ACTION1 = "action1" 
export const ACTION2 = "action2" 



export interface ACTION1_INTERFACE {
    type : typeof ACTION1 
    , payload : string 
}
export interface ACTION2_INTERFACE {
    type : typeof ACTION2 
    , payload : string 
}

export type ACTION_TYPES = ACTION1_INTERFACE  | ACTION2_INTERFACE

export function ACTION1_CREATOR (value: string) : ACTION1_INTERFACE {

    return {
        type : ACTION1 , 
        payload : value
    }
}

export interface DURUM  {
    value1 : string 
}

let reducer1 : Reducer<DURUM|undefined,ACTION_TYPES> = (state , action1) => {

    switch(action1.type) { 
        case ACTION1  : 
            return {...state , value1 : action1.payload}
            break  
        case ACTION2 : 
            return {...state , value1 : action1.payload}
            break 



    }
    return state
}


export  { reducer1 }