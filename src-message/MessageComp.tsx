
import React from "react"
 
import {Message , ChatState } from "./types"

export interface MessageProps {
    message : Message 
}

export interface MessagesProps {

    messages: Message[]
}
const MessageFn : React.FC<MessageProps> = (props : MessageProps) => <li>{props.message } </li>
export class MessageComp extends React.Component<ChatState> { 



    render(){
        
        let mshHtml  = this.props.messages.map(value   => <MessageFn message={value}/>)
        return <div> {mshHtml}</div> 
    } 

}