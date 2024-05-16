const langs=['Python','C++','Java']
console.log(langs)       // ['Python', 'C++', 'Java']

const arr=[...langs]
console.log(arr)          // ['Python', 'C++', 'Java']

console.log(...langs)    // Python C++ Java

const lang2=['JavaScript','Sql',...langs]
console.log(lang2)    //['JavaScript', 'Sql', 'Python', 'C++', 'Java']

//destructuring together with spread
const numbers=[1,2,3,4,5,6,7,8,9]
const [a,b,...numbers2]=numbers
console.log(numbers2) //[3, 4, 5, 6, 7, 8, 9] 

    //best practice of spread operators
    const addNumbers=(a,b,c)=>a+b+c;
    const numbers3=[100,200,300]
    console.log(addNumbers(...numbers3))   //600