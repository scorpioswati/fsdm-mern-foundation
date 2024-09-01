var myMap = new Map();
myMap.set("firstName","Robb")
myMap.set('lastname','stark')
myMap.set('age',30)
myMap.set('friend','john')
console.log("My map",myMap)

//map when we use object and function .built in method forniteration
//key are known

class Employee{
    constructor(id,name){
        this.id =id;
        this.name=name;
    }
    detail(){
        console.log(this.id + "" + this.name)
    }
}
var e1 = new Employee(101,"john")
var e2 = new Employee(102, "ravi");
var e3 = new Employee(103, "deepak");
e1.detail()
e2.detail()
console.log()