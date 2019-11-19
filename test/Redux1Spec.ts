import {reducer1 , DURUM , ACTION1_CREATOR, ACTION1} from "../src/types"
import {createStore ,combineReducers ,Reducer} from "redux"
import {expect} from "chai"
describe("Redux Tester" , () => {

    it("Redux" ,() => {

        let store =  createStore(reducer1)
        expect(store).exist
        store.dispatch(ACTION1_CREATOR("test value")) 
        let state = store.getState()
        expect(state).exist
        expect(state).has.ownProperty("value1","test value")
        console.log(state)
    })
})

