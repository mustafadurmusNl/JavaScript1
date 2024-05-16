//array functions
//map() function   returns an array

// const numbers = [2, 4, 6, 8, 10];

// function addTwo(number) {
//   return number + 2;
// }

// const numbersPlusTwo = numbers.map(addTwo);

// console.log(numbersPlusTwo);

//forEch() funtion returns nothing
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach( num =>sum+=num );//returns nothing 

console.log(sum)

//filter ()function it returns the elements of the array which meets the conddioyn in callback function
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: A

//evry() function
const ages = [32, 33, 16, 40];

const isAge=ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}
console.log(isAge)//false
//numbers.find()// returns first element which meets the condition of callback function

//youtube video
const items = [
    { name: 'Apple', price: 22 },
    { name: 'Banana', price: 12.20 },
    { name: 'Orange', price: 32.00 },
    { name: 'Mango', price: 42.50 },
    { name: 'Strawberry', price: 2.00 },
    { name: 'Grapes', price: 32.75 },
    { name: 'Pineapple', price: 52.20 }
  ];
//filter()function returns a function
const filteredItems=items.filter((item)=> {return item.price<=20})
console.log(typeof filteredItems )//returns elements in an array`

//map()function returns a function
 const namedItem=items.map( item =>item.name )
 console.log(namedItem)//  ['Apple','Banana',....]

 //find() returns boolean
   const isItem=items.find( item => item.name==='Grapes')
console.log(isItem)// retuns a value ={ name: 'Grapes', price: 32.75 }

//forEach() returns nothing  *****  kinda for loop
 items.forEach(item=>console.log(item.name))//prints each name bcs we did say so

 //reduce() function takes 2 parameter
 const totalCost=items.reduce( (accumulate,item)=> accumulate+=item.price,0 )//returns the accumulated value,  accumalate =0 as default
console.log(totalCost.toFixed(1))


//include method
const aaa=['ali','veli']
const isExist=aaa.includes('ali')
console.log(isExist)//true



//
const shoppingCart = ['bananas', 'milk',];

function addToShoppingCart(/* parameters go here */item) {
  // TODO complete this function
  if (item !== undefined) {
    shoppingCart.push(item); // Add the grocery item to the shopping cart
    if (shoppingCart.length > 3) {
      shoppingCart.shift(); // Remove the first item if the number of items exceeds three
    }
  }
  return `You bought ${shoppingCart.join(', ')} `; //join()method joins all element of the array into a string
}
console.log(addToShoppingCart("cola"))



//closure
// Function to increment counter
// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
  
//   // Call add() 3 times
//   add();
//   add();
//   add();
//   console.log(add())
//   console.log(add())
  //The counter should now be 3. But it is 1

//   function add() {
//     let counter = 0;
//     function plus() {counter += 1;}
//     plus();   
//     return counter;
//   }
//   console.log(add())
//   console.log(add())

  const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  console.log(add())  //1
  console.log(add())  //2

  //execution concept

  let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');

//closure

// function human(){
//     const name='sina'
//     function sayHi(){
//         console.log(`hi i m ${name}`)
//     }
//     function sayHowYouFell(){
//         console.log(`${name} is feeling great`)

//     }
//     sayHi()
//     sayHowYouFell()
// }
// human()
//
function human(name){
    
        function sayHi(){
        console.log(`hi i m ${name}`)
    }
    function sayHowYouFell(){
        console.log(`${name} is feeling great`)

    }
    return{
        sayHi,
        sayHowYouFell
    }
}
const peter=human('peter')
peter.sayHi()
peter.sayHowYouFell()
//

function createCounter(){
    let count=0;
    function increment(){
        count++;
        console.log(`count is increased to ${count}`)
    }
    function getCountNumber(){
        return count;
    }
    return{
        increment,
        getCountNumber
    }
}
const counter=createCounter()
counter.increment();  //1  bcs counter recieve a return of increment
counter.increment();//2
console.log(counter.count)  //undefined bcs it was encapsulated in functional scope
console.log(`the current count is ${counter.getCountNumber()}`)//the current count is 2

//closure  another example
function createGame(){     //a function returns an object of two function
  let score=0
  function increaseScore(points){
      score+=points;
      console.log(`you have ${points} points`)
  }
  function decreaseScore(points){
    score-=points;
    console.log(`you have ${points} points`)
  }
  function getScore(){
    return score;

    
  }
  return {
    increaseScore,
    decreaseScore,
    getScore
  }

}
const game1=createGame()
game1.increaseScore(5)
game1.increaseScore(11)
game1.decreaseScore(9)
console.log(`the final socre is ${game1.getScore()}`)


///  unit testing
const someOrder={
    items:[
        { name:'Dragon food',price:8, quantity:1},
        { name:'Dragon cage',price:70, quantity:1},
        {name:'Shipping',price:15, shipping:true}
    ]
}
 const orderTotal=order=>{
   const totalItems= order.items
                             .filter(x=>!x.shipping)   //add only items which has no shipping property
                             .reduce( (accumulate,current)=>accumulate+(current.price*current.quantity),0  )
   const shippingItem=order.items.find(x=>!!x.shipping)
   const shipping= totalItems>100 ? 0:shippingItem.price
   return totalItems+shipping
 }
 

 const resultt=orderTotal(someOrder)
console.log(resultt)//78

let brr=[1,2,3,4,5,6]
console.log(brr.slice(4).includes(5))

//HIGHER ORDER FUNCTION
const animals = [
  { name: "Lion", species: "Panthera leo" },
  { name: "Elephant", species: "Loxodonta africana" },
  { name: "Tiger", species: "Panthera tigris" },
  { name: "lion2", species: "Panthera leo" },
  { name: "Zebra", species: "Equus zebra" },
  { name: "Panda", species: "Ailuropoda melanoleuca" },
  { name: "Kangaroo", species: "Macropus" }
];
//below is how to pass a callback funtion into a higher function which is filter funtion
const lions=animals.filter(animal=>animal.species==='Panthera leo')//filter function will loop thriyggh each animal inside animals
console.log(lions)
console.log(33333333)
//another way to use a callback fundtion in a higher function which also does same as above
//watch this
const isLion=animal=>animal.species==="Panthera leo"
const lionss=animals.filter(isLion)
console.log(lionss)  //returns all lions 

//wow  have a look at this  which gives other animals
const otherAnimals=animals.filter(animal=>animal.species!=="Panthera leo")//filter function   requires a condition
console.log(otherAnimals)

//&*******************************************************
//map () function is another higher order function whic transform the elements into another array
//lets get all the names into a new array

const namesOfAnimals=animals.map( animal=>animal.name)//it def returns names into a new array
console.log(namesOfAnimals)  //arrow function returns implicitylt 

//reduce() function
const orders=[
  {amount:250},
  {amount:400},
  {amount:100},
  {amount:700},
  {amount:325}
]
const sumOfOrders=orders.reduce( (accumulate,current)=>accumulate+current.amount,0)
console.log(sumOfOrders)

//Advanced reduce()
