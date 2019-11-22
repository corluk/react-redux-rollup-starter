import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
import typescript from "rollup-plugin-typescript2"
import {eslint} from "rollup-plugin-eslint"
import { type } from "os"
import serve from "rollup-plugin-dev-server"
import browsersync from 'rollup-plugin-browsersync'
module.exports = {

    input : "src/Modules/Module2.tsx" , 
    output : {
        file: "build/dist/Module2.js", 
        format : "umd" ,
        name : "Module1"
        , globals : {
            react : "React",
            'react-dom' :"ReactDOM"
        } 
        
    },
  // external : ["react" , "react-dom"] , 
     plugins: [
        typescript({ tsconfig: "tsconfig.rollup.json",}) , 
        babel({
            exclude : "node_modules"
        }) , 
        resolve()  ,
        eslint() , 
        browsersync({
            server : ["build","node_modules"]
        })
    ]
}