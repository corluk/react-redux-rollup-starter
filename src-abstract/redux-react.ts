import { AComponentItem, AComponentItemCollection, AppState } from "./redux";
import { connect, ConnectedComponent } from "react-redux";
import { AComponent } from "./AComponent";


const mapStateToProps = (state : AppState) => ( {
    values : state.reducerValues.values
} )
 


export const XAComponent  =   connect(mapStateToProps)(AComponent) 
 

