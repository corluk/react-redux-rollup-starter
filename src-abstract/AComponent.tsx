

import React from "react" 

export interface AComponentProps {
    values : AComponentPropsValue[]
}

export interface AComponentPropsValue {
    content : string  ,
    no : number 
}

export const AComponentValue : React.FC<AComponentPropsValue>  = (props : AComponentPropsValue ) => <li>props.content </li> 
export class AComponent extends React.Component<AComponentProps> {

    render(){

        let html = this.props.values.map(value => <AComponentValue no={value.no} content={value.content} />)
        return  <ul>{html}</ul>
    }
}