import { global_obj } from "./testGlobal";
console.log("Global num2: " + global_obj.printValue());
global_obj.updateValue(22);
console.log("Global num2: " + global_obj.printValue());