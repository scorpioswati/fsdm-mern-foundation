
// //Looping
// console.log("while loop")
// let x = 25;
// while(x<45){
//     console.log(x)
//     x++
// }
// console.log('for loop')
// for(let i=1;i<=5;i++){
//     console.log(i)
// }
// console.log("do while")
// var y = 2
// do{
//     console.log(y)
//   y++
// }
// while(y<6)

// console.log("for in")
// let person = {
//     name:'john',age:'45',job:'Developer'
// }
// for (let key in person) {
 
//     console.log(key + ":" + person[key]);
  
// }
// for(let key in person){
//     if(key == 'job'){
//     console.log(key + ':' + person[key])
//     }
// }

// console.log(" for of")
// let number = [1,2,3,4,5]
// for(let num of number){
//     console.log(num)
// }
// for( let u = 1;u<=5;u++){
//     if(u === 3){
//         continue;
//     }
//     console.log(u)
// }
let myArray =[1,2,3,4,5];

console.log(myArray.length)
myArray.push(8,9) //add element at last
myArray.pop() //remove last element
myArray.slice(1,3)
myArray.shift() //remove first element
myArray.unshift(0,-1)//add elements in the starting
myArray.join('|');
myArray.splice(2,3,'9','7','0') //
console.log(myArray);


for(let i=0;i<myArray.length;i++){
    console.log(myArray[i])
}
myArray.forEach(num=>console.log(num))

let swati=myArray.map(item=>item*6)//create new array
console.log(swati)

const filter = myArray.filter(num=>num!=0 && num%2==0)
console.log(filter)

const reduce = myArray.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)
console.log(reduce)