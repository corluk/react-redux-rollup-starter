import ReactDOM from "react-dom" 
import React from "react" 

import {xAComponent} from "./redux-react" 


import {store} from "./redux" 


import {Provider} from "react-redux" 
import { AComponent } from "./AComponent"


ReactDOM.render(<Provider store={store}>

    <AComponent values={[{content: "a",no:1}]} />
</Provider>, document.getElementById("app"))