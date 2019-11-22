import  * as   Enzyme from 'enzyme'
import  Adapter from 'enzyme-adapter-react-16'

console.log("started before all enzyme")

beforeAll(()=>{
    Enzyme.configure({
        adapter: new Adapter() 
      })
})