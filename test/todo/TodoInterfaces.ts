
export interface  TodoList {

    todos : Todo [] 
    addTodo : (todo : string  ) => void  
} 
export interface TodoCrud {
    add : (text :string) => void 
}
export interface TodoFilter {
    toggle : (index : number) => void 
}
export interface Todo {

     task : string 
}

