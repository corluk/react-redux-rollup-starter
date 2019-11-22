import jasmineEnzyme from "jasmine-enzyme" 
import Enzyme , {shallow , configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import {expect} from "chai"
import {TodosComponent} from "../src-mock/TodosComponent"
import * as React from "react";
import { writer } from "repl"
Enzyme.configure({ adapter: new Adapter() });
describe("Testing Enzyme" , () => {

    beforeEach(()=>{
        jasmineEnzyme()
    })
    it("some test ", () => {

         const wrapper = shallow(<TodosComponent />);
         console.log(wrapper.props)
         expect(wrapper).not.null


        }) 
})