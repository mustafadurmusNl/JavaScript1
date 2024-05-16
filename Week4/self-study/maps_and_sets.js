const chalk = require("chalk")

let myMap=new Map()
const key1='mustafa'
const key2={a:10,b:20}
const key3=()=>2

myMap.set(key1,'string something')
myMap.set(key2,'object literal')
myMap.set(key3,'function value')
console.log(myMap)
console.log(myMap.get(key1))    // string something

//forEach() on maps
console.log(129)
 myMap.forEach( (value,key)=>{
    console.log(key,value)
 } )

 //er can iterate over each keys of my map
 myMap.forEach(  (key,value)=>{
    console.log(key)
 })

 myMap.forEach(  (key,value)=>{
    console.log(value)
 })

 //creating an array from a map
  const arrayMyMap=Array.from(myMap)
  console.log(arrayMyMap) //[['mustafa', 'string something'],[{ a: 10, b: 20 }, 'object literal'],[[Function: key3], 'function value']]


  //sets
  const mySet=new Set()
  mySet.add(100)
  mySet.add(230)
  mySet.add(100)
  mySet.add('mustafa')
  mySet.add([1,2,3])

  console.log(mySet.has('mustafa'))  //true
  console.log(mySet.has([1,2,3])) //false  bcs the array is referance type value

  mySet.forEach( value=> console.log(value))
  
  //lets create an array from the set
  const arrsyMySet=Array.from(mySet)
  console.log(arrsyMySet)   //[ 100, 230, 'mustafa', [ 1, 2, 3 ] ]