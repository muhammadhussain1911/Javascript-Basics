// Using a json file is best approach. If we need to change a value, we only change it in json file and it will automatically reflect everywhere it is used.


const obj = require("./module.json")

console.log(obj.JavaScript);
