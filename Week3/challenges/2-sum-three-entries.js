/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;
    
// Write your code here
   list.forEach((num1,index)=>{

    list.slice(index+1).forEach( (num2,innerIndex)=>{

       const remainingSum=2020-num1-num2;
       const found= list.slice(index+innerIndex+2).some(num=>num===remainingSum)
     if(found){
      result=num1*num2*remainingSum
    }
    } )
   })

// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);
console.log(result)
console.log(11111111111)
console.log(result)