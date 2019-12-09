import React from "react" 
 
export interface TodosAll {
    todos: TodoProps[];
}

export interface TodoProps {

    task : string, 
    selected : boolean 
}

const TodoComponent  : React.FC<TodoProps>= (props : TodoProps) => {

    let bgColor = props.selected != undefined && props.selected === true? "red" : "blue"
    return <div style={{backgroundColor:bgColor}}>{props.task} </div>

}
export class TodosComponent extends React.Component<TodosAll>{


    render(){

        console.log("this.props at ")
        console.log(this.props)
        
        console.log("this.props.todos ")
        console.log(this.props.todos[1] )
        console.log("this.props.todos typeod  ")
        console.log(typeof this.props.todos )
      let   todosHtml  =     this.props.todos.map((todo, i)  => {

            return (<ul key={i}  ><TodoComponent task={todo.task} selected={todo.selected}>/></TodoComponent> </ul>)
            

      })
         return <div><ul> {todosHtml} </ul></div>
    }
}