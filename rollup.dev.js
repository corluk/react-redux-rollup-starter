const rollup = require("rollup")
const rollupconfig = require ("./rollup.config")

rollup(rollupconfig).then((result) => console.log(result))