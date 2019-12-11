import { MapStateToProps } from "react-redux";
import { ChatState } from "./types";
import { MessagesProps, MessageProps } from "./MessageComp";

const MessageStateToProps : MapStateToProps<ChatState,any,MessagesProps>  = (state :ChatState) : MessagesProps => {

    return {
        messages : state.messages
    }

}



