
import {Action} from "redux"
export interface AComponentItem {
    value : string, 
    no : number  
}
export interface  AComponentItemCollection {
    values : AComponentItem[]
}

const enum AComponentAction {

    UPDATE = "update" ,  
    CREATE = "create" , 

} 


const aComponentCreate : Action<AComponentItemCollection> = (newItem : AComponentItem )=>{

    return {
        type : AComponentAction.CREATE , 
        payload : newItem 
    }

}  

const aComponentUpdate : Action<AComponentItemCollection> = (newValue : string, no : number )=>{

    return {
        type : AComponentAction.UPDATE , 
        payload : {
            content  : newValue , 
            no : no 
        } 
    }
}


const aComponentReducer = (state : AComponentItemCollection , action : AComponentAction) =>{

    switch(  action){

        case AComponentAction.UPDATE : 
            state.values.filter(item => item.no == action.)
    }
}