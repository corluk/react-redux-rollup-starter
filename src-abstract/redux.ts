
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

 const inits  : AComponentItemCollection = {
     values: [{value:"test1" , no : 12}]
 } 
const aComponentReducer    = (state : AComponentItemCollection  = inits , action : AComponentActions) =>{
        console.log("this is aComponent Reducer")
        console.log(action)
    switch(  action.type ){

        case AComponentActionNames.UPDATE : 
        console.log("update received")
            let theAction = action as AComponentActionUpdate
           console.log("theAction")
            let newState = state.values.filter(item => item.no == theAction.payload.no).map(selectedItem =>{ 
           console.log(newState) 
                    selectedItem.value  =theAction.payload.newValue
                console.log("newState in switch")
                console.log(newState) 
                
                return selectedItem 
                }
                )
            return state 
            
        case AComponentActionNames.CREATE : 
        console.log("create received")
            let theAction2 = action as AComponentActionCreate  
            return  Object.assign({} , state , {values : [...state.values , action.payload]})
    }
    console.log("returning state only ")
    return state 
}

const reducers = combineReducers({
   reducerValues : aComponentReducer 
})

const init2 = {
    reducerValues : inits
}
export const store = createStore(reducers , init2 , undefined  )  

export type AppState = ReturnType<typeof reducers>
