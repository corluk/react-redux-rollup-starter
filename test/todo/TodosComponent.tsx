import React , {Component , FunctionComponent, RefObject} from "react" 
import {TodoList , Todo , TodoCrud }  from "./TodoInterfaces"
    import { format } from "path"
const   TodoComponent  = (props : Todo  ) => {

    return <li> {props.task } </li>
}

const AddTodo : React.FunctionComponent = (props:TodoCrud  )=>{

    let input : RefObject<HTMLInputElement>  = React.createRef()
    let add : (event : React.MouseEvent<HtmlInputElement, MouseEvent>) => {

    } 
    return <div> 
        <input type="text" ref={input} onClick={(e) => add(e)} /> 
    </div>

}
class TodosComponent extends Component<TodoList>{


    render(){

       let items =  this.props.todos.map( todo => <TodoComponent task={todo.task} /> )
        return <div><div>  <ul>{items} </ul></div> 
            <div> 
            <input type="text" ref="/>>
            <button onClick={ () =>  this.props.addTodo() } />
            </div>
            </div>
            
         </div> 
    
}