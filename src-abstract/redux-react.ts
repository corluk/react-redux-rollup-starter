import { AComponentItem, AComponentItemCollection } from "./redux";
import { connect, ConnectedComponent } from "react-redux";
import { AComponent } from "./AComponent";


const mapStateToProps = (state : AComponentItemCollection) => {

    return {
        values : state 
    }    
}


export const xAComponent  =   connect(mapStateToProps)(AComponent) 
 

