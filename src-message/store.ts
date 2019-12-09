import { combineReducers } from "redux";
import { systemReducer, chatReducer } from "./reducers";
//https://redux.js.org/recipes/usage-with-typescript
const rootReducer = combineReducers({
    system: systemReducer  , 
    chat : chatReducer 
})

export type RootState = ReturnType<typeof rootReducer>

