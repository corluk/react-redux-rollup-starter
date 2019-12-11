import { AComponentItem } from "./redux";


const mapStateToProps = (state : AComponentItem[]) => {

    return {
        values : state 
    }    
}