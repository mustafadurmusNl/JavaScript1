// function addNum(a,b){
//     return a+b
// }
// test('add 2two numbers',()=>{
//   expect(addNum(2,5)).toBe(7)
// })



/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function returns a new array that is a deduplicated version of the combination of the two arrays.
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const combineAndDeduplicate = (firstArr, secondArr) => {
  if (!Array.isArray(firstArr)) {
    if (Array.isArray(secondArr)) {
      return secondArr;
    } else {
      return [];
    }
  } else if (!Array.isArray(secondArr)) {
    if (Array.isArray(firstArr)) {
      return firstArr;
    } else {
      return [];
    }
  }

  const newArray = [...firstArr, ...secondArr];

  // This syntax will be new to you, it is a quick way to remove any duplicates from the newArray
  return [...new Set(newArray)];
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
describe("combineAndDeduplicate", () => {
  it("returns a deduplicated array when combining two arrays with duplicate elements", () => {
    const firstArr = [1, 2];
    // console.log(firstArr===[1,2]);
    const secondArr = [3, 4];
    const expectedResult = [1, 2, 3, 4];
    expect(combineAndDeduplicate(firstArr, secondArr)).toEqual(expectedResult);
  });
});

// function addNum(a,b){
//     return a+b
// }

const firstArr=[1,2]
const secondArr=[1,2]
test('are they equal',()=>{
  expect(firstArr).toEqual(secondArr)
})




/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function calculates the average of an array of numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The average of the numbers in the array. If the array is empty, it returns NaN.
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const calculateAverage = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return NaN;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
describe("calculateAverage", () => {
  it("returns the average of an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = 3;
    expect(calculateAverage(numbers)).toEqual(expectedResult);
  });

  it("returns NaN when the input array is empty", () => {
    const numbers = [];
    expect(calculateAverage(numbers)).toBeNaN();
  });

  it("returns NaN when the input is not an array", () => {
    const numbers = "not an array";
    expect(calculateAverage(numbers)).toBeNaN();
  });
});
