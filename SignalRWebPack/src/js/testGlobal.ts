var global_num = 12          //global variable 
class Numbers {
    num_val = 13;             //class variable 
    static sval = 10;         //static field 

    storeNum(): void {
        var local_num = 14;    //local variable 
    }

    printValue(): string {
        let n = this.num_val;
        return ("my value is " + n.toString());
    }

    updateValue(new_val: number): void {
        this.num_val = new_val;
    }
}
console.log("Global num: " + global_num)
console.log(Numbers.sval)   //static variable  
export var global_obj:Numbers = new Numbers();
