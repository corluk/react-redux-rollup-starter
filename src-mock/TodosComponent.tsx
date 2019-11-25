import React from "react" 
interface Props {
    test? :string 
}
export class TodosComponent extends React.Component<Props>{


    render(){
    return <div> This is React Component test : {this.props.test}</div>
    }
}