import React from "react" 
export interface TodosProps {
    todos : TodoProps[]  
}
export interface TodoProps {

    task : string
}

const TodoComponent = (props : TodoProps) => <div>{props.task} </div> 
export class TodosComponent extends React.Component<TodosProps>{


    render(){


      let   todosHtml  =     this.props.todos.map((todo, i)  => <ul key={i}>Task is  {todo.task} </ul>)
         return <div><ul> {todosHtml} </ul></div>
    }
}