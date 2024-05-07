'use strict';
/* -----------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-1-you-are-amazing

1. Complete the function named `giveCompliment`as follows:

   - It should take a single parameter: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliment, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliment from the array.
   - It should return the string "You are `compliment`, `name`!", where
     `compliment` is a randomly selected compliment and `name` is the name that
     was passed as an argument to the function.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
function giveCompliment(/* TODO parameter(s) go here */name) {
  
  // TODO complete this function
  const compliments = [
    "Great job!",
    "You're awesome!",
    "Well done!",
    "Fantastic work!",
    "Keep up the good work!",
    "Impressive!",
    "You're amazing!",
    "Excellent job!",
    "Outstanding performance!",
    "Bravo!"
  ];
    let randomIndex=Math.floor(Math.random()*compliments.length)
    let randomCompliment=compliments[randomIndex];
  return `hey #{name} you re ${randomCompliment}`;
}

function main() {
  // TODO substitute your own name for "HackYourFuture"
  const myName = 'HackYourFuture';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
console.log(11111)
//2
'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignment/tree/main/1-JavaScript/Week3#exercise-2-dog-years

You know how old your dog is in human years, but what about dog years? Let's
calculate it!

1. Complete the function named `calculateDogAge`.

  - It takes one parameter: your (fictional) puppy's age (number).
  - Calculate your dog's age based on the conversion rate of 1 human year to
    7 dog years.
  - Return a string: "Your doggie is `age` years old in dog years!"

2. Use `console.log` to display the result of the function for three different
   ages.
-----------------------------------------------------------------------------*/

function calculateDogAge(/* TODO parameter(s) go here */age) {
  // TODO complete this function
  let yourDogAge=age*7;
  return `Your doggie is ${yourDogAge} years old in dog years!`; 
}

function main() {
  console.log(calculateDogAge(1)); // -> "Your doggie is 7 years old in dog years!"
  console.log(calculateDogAge(2)); // -> "Your doggie is 14 years old in dog years!"
  console.log(calculateDogAge(3)); // -> "Your doggie is 21 years old in dog years!"
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = calculateDogAge;


//3
'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(/* TODO parameter(s) go here */array) {
  const randomIndex=Math.floor(Math.random()*array.length)
  return array[randomIndex]
  // TODO complete this function
}

function tellFortune(/* TODO add parameter(s) here */numKids,partnerNames,locations,jobTitles) {
  // TODO complete this function
             const selectedNumKid=selectRandomly(numKids)
             const selectedPartnerName=selectRandomly(partnerNames)
             const selectedLocation=selectRandomly(locations)
             const selectedJobTitle=selectRandomly(jobTitles)
  const fortune=`You will be a ${selectedJobTitle} in ${selectedLocation}, 
                       married to ${selectedPartnerName} with ${selectedNumKid} kids.`
  return fortune;
}

function main() {
  const numKids = [1,2,3,4,5
    // TODO add elements here
  ];

  const partnerNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva'
    // TODO add elements here
  ];

  const locations = ['New York', 'Paris', 'Tokyo', 'London', 'Sydney'
    // TODO add elements here
  ];

  const jobTitles = ['Engineer', 'Artist', 'Doctor', 'Teacher', 'Chef'
    // TODO add elements here
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
//4
'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-4-shopping-at-the-supermarket

Let's do some grocery shopping! We're going to get some things to cook dinner
with. However, you like to spend money and always buy too many things. So when 
you have more than 3 items in your shopping cart the first item gets taken out.

1. Create an array called `shoppingCart` that holds the following strings: 
   "bananas" and "milk".

2. Complete the function named `addToShoppingCart` as follows:

   - It should take one argument: a grocery item (string)
   - It should add  the grocery item to `shoppingCart`. If the number of items is
     more than three remove the first one in the array.
   - It should return a string "You bought <list-of-items>!", where 
     <list-of-items>is a comma-separated list of items from the shopping cart 
     array.

3. Confirm that your code passes the unit tests.
-----------------------------------------------------------------------------*/
const shoppingCart = ['bananas', 'milk'];

// ! Function to be tested
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
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log(
    'Test 1: addShoppingCart() called without an argument should leave the shopping cart unchanged'
  );
  const expected = 'You bought bananas, milk!';
  const actual = addToShoppingCart();
  console.assert(actual === expected);
}

function test2() {
  console.log('Test 2: addShoppingCart() should take one parameter');
  const expected = 1;
  const actual = addToShoppingCart.length;
  console.assert(actual === expected);
}

function test3() {
  console.log('Test 3: `chocolate` should be added');
  const expected = 'You bought bananas, milk, chocolate!';
  const actual = addToShoppingCart('chocolate');
  console.assert(actual === expected);
}

function test4() {
  console.log('Test 4: `waffles` should be added and `bananas` removed');
  const expected = 'You bought milk, chocolate, waffles!';
  const actual = addToShoppingCart('waffles');
  console.assert(actual === expected);
}

function test5() {
  console.log('Test 5: `tea` should be added and `milk` removed');
  const expected = 'You bought chocolate, waffles, tea!';
  const actual = addToShoppingCart('tea');
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
  test3();
  test4();
  test5();
}

test();
//5
'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-5-improved-shopping-at-the-supermarket

In the current exercise we will rewrite the `addToShoppingCart` function to make 
it pure. Do the following:

1. Complete the parameter list of `addToShopping()`. As a first parameter it 
   should accept a shopping cart array and as a second parameter it should 
   accept a grocery item to be added.
2. The function should return a new shopping cart array, following the same rule 
   as in the previous exercise: it should contain a maximum of three items.
3. The shopping cart passed as an argument should not be mutated.
4. When constructing the new shopping cart array you should make use of the ES6 
   spread syntax.
5. Confirm that you function passes the provided unit tests.
------------------------------------------------------------------------------*/
// ! Function under test
function addToShoppingCart(/* TODO parameter(s) go here */) {
  // TODO complete this function
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('Test 1: addToShoppingCart should take two parameters');
  console.assert(addToShoppingCart.length === 2);
}

function test2() {
  console.log('Test 2: addToShoppingCart should be a pure function');
  // A pure function should return the same result when called with
  // identical arguments. It should also have no side effects (not tested here).
  const initialCart = ['bananas', 'milk'];
  const result1 = addToShoppingCart(initialCart, 'chocolate');
  const result2 = addToShoppingCart(initialCart, 'chocolate');
  console.assert(JSON.stringify(result1) === JSON.stringify(result2));
  console.assert(
    JSON.stringify(initialCart) === JSON.stringify(['bananas', 'milk'])
  );
}

function test3() {
  console.log('Test 3: `chocolate` should be added');
  const initialCart = ['bananas', 'milk'];
  const result = addToShoppingCart(initialCart, 'chocolate');
  console.assert(result.length === 3);
  console.assert(result.includes('chocolate'));
}

function test4() {
  console.log('Test 4: `waffles` should be added');
  const initialCart = ['bananas', 'milk', 'chocolate'];
  const result = addToShoppingCart(initialCart, 'waffles');
  console.assert(result.length === 3);
  console.assert(result.includes('waffles'));
}

function test() {
  test1();
  test2();
  test3();
  test4();
}

test();

//6
'use strict';

const { chain } = require("lodash");

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  // TODO complete this object
  beers: 1.75,
  chips: 0.99,
  soda: 2.5,
  pizza: 8.99,
  cake: 12.49
};

function calculateTotalPrice(/* TODO parameter(s) go here */cart) {
  // TODO replace this comment with your code
  let totalPrice=Object.values(cart).reduce( (accumulate,current)=>accumulate+current,0)

return `Total: €${totalPrice.toFixed(2)}`; // Return the total price as a string
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
}

function test() {
  test1();
  test2();
}

test();
//7
'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-7-mind-the-privacy

1. Complete the `filterPrivateData()` function. It should take a single 
   parameter: the array of employee records.
2. It should create a _new_ array, containing employee data without the private
   data.
3. Use object destructuring to extract the non-private properties from an 
   employee record (an `object`) and object literal shorthand to create a new 
   employee record with just the non-private parts (name, occupation and email).
4. Return the new array as the return value of the function.
5. Run the exercise and verify that it passes all the unit tests.
------------------------------------------------------------------------------*/
const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

// ! Function under test
function filterPrivateData(/* TODO parameter(s) go here */array) {
return array.map( ({name,occupation,email})=>({name,occupation,email})
 )

  // TODO complete this function
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('Test 1: filterPrivateData should take one parameters');
  console.assert(filterPrivateData.length === 1);
}

function test2() {
  console.log('Test 2: gender and salary should be filtered out');
  const expected = [
    {
      name: 'John',
      occupation: 'developer',
      email: 'john.doe@somewhere.net',
    },
    {
      name: 'Jane',
      occupation: 'manager',
      email: 'jane.eyre@somewhere.net',
    },
  ];
  const result = filterPrivateData(employeeRecords);
  console.assert(JSON.stringify(result) === JSON.stringify(expected));
}

function test() {
  test1();
  test2();
}

test();






d