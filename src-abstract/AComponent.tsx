

import React from "react" 
import { AComponentItem } from "./redux"

export interface AComponentProps {
    values : AComponentItem[]
}

export interface AComponentPropsValue {
    value  : string  ,
    no : number , 
    mode : string 
    update : ()
}


export const NewAComponentItem : React.FC = (props) => {
    props.
}
export const AComponentValue : React.FC<AComponentPropsValue>  = (props : AComponentPropsValue ) => <li key={props.no}>{props.value} </li> 
export class AComponent extends React.Component<AComponentProps> {

    render(){ 
        console.log("dispatch")
        console.log(this.props.dispatch({type:"update",payload:{
            no : 1 , 
            value: "updated"
        }}))
        let html = this.props.values.map(value => <AComponentValue key={value.no}no={value.no} value={value.value} />)
        return  <ul>{html}</ul> 
    }
}