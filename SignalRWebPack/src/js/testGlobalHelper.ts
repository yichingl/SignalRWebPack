import { obj } from "./testGlobal";
console.log("Global num2: " + obj.printValue());
obj.updateValue(22);
console.log("Global num2: " + obj.printValue());