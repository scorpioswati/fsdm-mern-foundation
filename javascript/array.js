//two dimesnional array where we want to create table,game development,chess,sudoku,puzzle


let mynumberm =  [[1,2,3,4,5], [6,7,8,9,10],[11,12,13,14]];
console.log(mynumberm.length)
console.log(mynumberm)
mynumberm.forEach(element=>console.log(element))
for(let i=0;i<=mynumberm.length;i++){
    console.log('Array at index : ',i,"is",mynumberm[i])
    for(let j=0;j<=mynumberm[i];j++){
        console.log('jbkjmj',[i][j])
    }
}

//Array Mutability
let arr =[1,2,3,4,5]
console.log(arr)

arr[2]=10;
console.log('modified at the index 2:',arr)
arr.length=3
console.log('Mutable after changing length:',arr)


arr.push(11,12,13)
console.log("push array",arr)

arr.splice(2,1,23)
console.log('arr after splice',arr)

arr.pop(23)
console.log("pop",arr)//last element remove


//array immutable means without modification

let array =[1,2,3,4,5,6]
console.log(array)

let  newArray= array.map(item=>item*2)
console.log("newArray",newArray)

let withoutMutation =[...array,78,67]
console.log("new array without modification",withoutMutation)