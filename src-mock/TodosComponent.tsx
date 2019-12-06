import React from "react" 
export interface TodosProps {
    todos : TodoProps[]  
    ,selected? : number[] 
}
export interface TodoProps {

    task : string, 
    selected : boolean 
}

const TodoComponent = (props : TodoProps) => <div>{props.task} </div> 
export class TodosComponent extends React.Component<TodosProps>{


    render(){


      let   todosHtml  =     this.props.todos.map((todo, i)  => {
          let   selected = this.props.selected != undefined ? this.props.selected.includes(i) ? "red" : "blue" : "blue"  

            
            return (<ul key={i} style={{backgroundColor:selected}}>Task is  {todo.task} </ul>)
            

      })
         return <div><ul> {todosHtml} </ul></div>
    }
}