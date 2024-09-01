function Employee(name,designation,yearOfBirth){
    this.name=name
    this.designation=designation
    this.yearOfBirth=yearOfBirth
}
Employee.prototype.calulateAge=function(){
    console.log("the cuurent age is"+ (2024 - this.yearOfBirth))
}




let emp1 = new Employee('Alex','Developer',1998)
console.log(emp1)
emp1.calulateAge()

let emp2= new Employee("john", "Developer", 1998);
console.log(emp1);
emp1.calulateAge();

let emp3 = new Employee("timmy", "Developer", 1998);
console.log(emp1);
emp1.calulateAge();