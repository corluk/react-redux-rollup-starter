import React , {Component , FunctionComponent} from "react" 
export interface TodosProps {

    todos : string[] 
    addTodo : (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
}


export interface TodoStates {

    addTodo : (todo:string) => void  
}
export interface TodoProps {
    todo : string  
}
const   TodoComponent  = (props : TodoProps ) => {

    return <li> {props.todo} </li>
}
class TodosComponent extends Component<TodosProps,TodoStates>{


    render(){

       let items =  this.props.todos.map( todo => <TodoComponent todo={todo} /> )
        return <div>  <ul>{items} </ul>
            <button onClick={this.props.addTodo} />
         </div> 
    
}