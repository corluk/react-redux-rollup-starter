import ReactDOM from "react-dom" 
import React from "react" 

import {XAComponent} from "./redux-react" 


import {store} from "./redux" 


import {Provider} from "react-redux" 
 
import { AComponentItem, AComponentItemCollection, AppState } from "./redux";
import { connect, ConnectedComponent } from "react-redux";
 
 

 

ReactDOM.render(<Provider store={store}>

   <XAComponent />
</Provider>, document.getElementById("app"))