import ReactDOM from "react-dom" 
import {TodosComponent} from "./TodosComponent"
import React from "react"
import {createStore , Store , Action, Reducer, combineReducers, DeepPartial } from "redux"
import {configureStore}from "@reduxjs/toolkit"


import {Provider  ,  } from "react-redux"
enum  TodoActionTypes {
 ADD_TODO ="ADD_TODO" 

} 
interface TodoActionPayload extends Action<TodoActionTypes>{

    text :string 

}
interface TodoState {

    todos? : string[]
}
const reducerInitial : TodoState = { 
    todos : []
}
 
const reducertodos    = (durum : TodoState = reducerInitial     , hareket : TodoActionPayload) => {
   
    switch(hareket.type){   
        case TodoActionTypes.ADD_TODO : 
            return Object.assign({} ,durum , {
                todos : [hareket.text]
            })
        default :  
            return { ...  durum } 
    }

    return durum
}

const combinedReducers = combineReducers({
    sectiontodos : reducertodos
})

const initial   = {
    sectiontodos: { 
        todos : ["initial"]
    }
     
}  
type  red  = ReturnType<typeof combinedReducers>
configureStore({ 
    reducer : reducertodos
})
const store   =   createStore(combinedReducers , initial ,undefined  )
console.log(store)
console.log(store.getState())
ReactDOM.render( 
<Provider store={store}>
<TodosComponent  test="init" /> 
</Provider>, document.getElementById("app"))
 
