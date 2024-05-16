const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"

function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
  console.log(filtered)


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;  //true
}
console.log(isPrime(7))//true
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//rea life example
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter( el => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

/*
The find() method of Array instances returns the first element in
 the provided array that satisfies the provided testing function. If no values satisfy
  the testing function, undefined is returned.

If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), 
but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use includes(). Again, it checks each element
 for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use some().
If you need to find all elements that satisfy the provided testing function, use filter().
*/

//find()
const array1 = [5, 12, -8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
const anyNegative=(num)=>{
    if(num>=0){
        return false
    }
    return num<0
}
console.log(anyNegative(-8))//true
console.log(array1.find(arr=>anyNegative(arr)))  //-8

//real life example
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ]
  function isCherry(fruitObject){
    return fruitObject.name==='cherries'
  }
  console.log(inventory.find(inv=>isCherry(inv)))