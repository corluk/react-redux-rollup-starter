import ReactDOM from "react-dom" 
import {TodosComponent ,TodoProps ,  TodosAll} from "./TodosComponent"

import React from "react"
import {createStore , Store , Action, Reducer, combineReducers, DeepPartial } from "redux"
import {configureStore}from "@reduxjs/toolkit"


import {Provider  , connect, ConnectedComponent, InferableComponentEnhancer, DispatchProp, MapStateToProps } from "react-redux"
 
 
enum  TodoActionTypes {
 ADD_TODO ="ADD_TODO" 

} 
interface TodoActionPayload extends Action<TodoActionTypes>{

    text :string 

}
 
 let p : TodoProps[] =  {} as TodoProps[] 
const reducertodos    = (durum : TodoProps[]  = p     , hareket : TodoActionPayload) => {
   console.log("durum at reducer tofos durum ")
   console.log(durum) 
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
    todos : reducertodos
})

   
 /*
const initTodos : DeepPartial <{todos: TodoProps[]}>  = {
    todos  : [ {task : "task1" ,selected : true  }  , {task : "task2" ,selected:false}]
    
    }
    */
   const initTodos    = {
    
    }
const store   =   createStore(combinedReducers , initTodos ,undefined  )



/// connect to component 
const mapStateToProps   = (state : TodoProps[] = []) => {
    console.log("state in mapstate") 
    console.log(state)
         return {
         todos : state
     }

}
const ConnectedTodosComponent  = connect (mapStateToProps)(TodosComponent)
console.log("Connected ")
console.log(ConnectedTodosComponent)
console.log("UnConnected")
console.log(TodosComponent)
console.log("inittodos")
console.log(initTodos)
// what is the props of component TodosComponent 
 
/*
ReactDOM.render( 
<Provider store={store}>
<TodosComponent  todos={initTodos.todos}   /> 
</Provider>, document.getElementById("app"))
 */

 class  App extends React.Component <any>  {


    render(){
        console.log("this.props")
        console.log(this.props)

        return  <ConnectedTodosComponent   />
    }
 } 
 /*
ReactDOM.render( 
    <Provider store={store}>
    <ConnectedTodosComponent todos={initTodos.todos}    /> 
    </Provider>, document.getElementById("app"))
*/
console.log("store.getState")
console.log(store.getState())
ReactDOM.render( 
    <Provider store={store}> 
    <ConnectedTodosComponent    /> 
    </Provider>
    , document.getElementById("app"))