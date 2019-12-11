
import {Action, createStore, combineReducers, Reducer, DeepPartial} from "redux"
import { UnaryExpression } from "@babel/types"
export interface AComponentItem {
    value : string, 
    no : number  
}
export interface  AComponentItemCollection {
    values : AComponentItem[]
}

const enum AComponentActionNames  {

    UPDATE = "update" ,  
    CREATE = "create" , 

} 

interface  AComponentActionUpdate extends Action<AComponentActionNames>  {

    payload : {
        newValue : string , 
        no : number 
    }
}


interface AComponentActionCreate extends Action<AComponentActionNames> {
     payload : AComponentItem ,
     

}
type AComponentActions = AComponentActionCreate | AComponentActionUpdate 
const aComponentCreateActionCreator = (newItem : AComponentItem ) :  AComponentActions =>{

    return {
        type : AComponentActionNames.CREATE , 
        payload : newItem 
    }

}  

const aComponentUpdateActionUpdate   = (newValue : string, no : number ) :  AComponentActions   =>{

    return {
        type : AComponentActionNames.UPDATE , 
        payload : {
            newValue  : newValue , 
            no : no 
        } 
    } 
}

 const inits  : AComponentItem[] = [{value:"test1" , no : 12}] 
const aComponentReducer  : Reducer<AComponentItem[] | undefined,AComponentActions> = (state : AComponentItem[]  = inits , action : AComponentActions) =>{
    
    switch(  action.type ){

        case AComponentActionNames.UPDATE : 
            let theAction = action as AComponentActionUpdate
            let newState = state.filter(item => item.no == theAction.payload.no).map(selectedItem =>{ 
                selectedItem.value  =theAction.payload.newValue
                return selectedItem 
                }
                )
            return newState 
            
        case AComponentActionNames.CREATE : 
            let theAction2 = action as AComponentActionCreate  
            return  [...state ,theAction2.payload] 
    }

}

const reducers = combineReducers({
    xx1 : aComponentReducer 
})

const init2 = {
    xx1 : inits
}
export const store = createStore(reducers , init2 , undefined  )  


