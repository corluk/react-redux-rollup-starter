import ReactDOM from "react-dom" 
import {TodosComponent} from "./TodosComponent"
import React from "react"
import {createStore , Store , Action, Reducer, combineReducers} from "redux"



import {Provider   } from "react-redux"
enum  TodoActionTypes {
 ADD_TODO ="ADD_TODO" 

} 
interface TodoActionPayload extends Action<TodoActionTypes>{

    text :string 

}
interface TodoState {

    todos : string[]
}
 
const todos = (state : TodoState  | undefined , action : TodoActionPayload) => {
   
    switch(action.type){   
        case TodoActionTypes.ADD_TODO : 
            return Object.assign({} ,state , {
                todos : [action.text]
            })
        default :  
            return { ...  state } 
    }

    return state 
}

const combinedReducers = combineReducers({
    todos : todos 
})

const initial : TodoState  = {
    todos: ["initial"]
} 
type  red  = ReturnType<typeof combinedReducers>
const store   =   createStore(combinedReducers ,initial as any  )
console.log(store)
console.log(store.getState())
ReactDOM.render( 
<Provider store={store}>
<TodosComponent  test="init" /> 
</Provider>, document.getElementById("app"))
 
