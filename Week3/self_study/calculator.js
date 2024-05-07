/*
Exercise 1: Simple Interest Calculator***
**Description:** Write a function called  `calculateInterest`  that computes the simple interest based 
on given inputs
**Instructions:**
1. The function should take three parameters: principal (the initial amount of money), rate (the 
annual interest rate in percentage), and time (time the money is invested or borrowed for in 
years)
2. Calculate the simple interest using the formula simple interest = (principal * rate * time) / 100
3. Return a string: "The interest after time years will be interest dollars."
4. Use console.log to display the result for three different sets of values
*/
function calculateInterest(principal,rate,time){
    const simpleInterest= (principal * rate * time) / 100
    return `The interest after ${time} years will be $${simpleInterest} dollars.`
}
console.log(calculateInterest(1000,5,3)) //150

//
/*
Exercise 2: Functional Programming with Arrays***
**Description:** Implement a function  `transformData`  that takes an array of objects and a 
transformation function to apply specific changes to the objects based on certain conditions.
**Instructions:** The function should take an array of objects and an array of transformation functions. 
Each transformation function should take an object and return it modified or unmodified based on a 
condition. For example, if the transformation function is meant to increase the salary by 10% for 
developers, it should do so only for objects where the occupation is "developer".
```javascript
*/
const employees = [
    { name: "Alice", occupation: "developer", salary: 90000 },
    { name: "Bob", occupation: "manager", salary: 85000 },
    { name: "Carol", occupation: "developer", salary: 105000 },
    { name: "David", occupation: "HR", salary: 75000 }
];
const increaseSalary=(employee)=>{
    if(employee.occupation==='developer'){
        employee.salary*=1.1
    }
    return employee;
    
}
const transformations =[//some transformation functions such as 
                    //promition,holidayFee
                      increaseSalary ]

const transformData = (/*parameters go here (array of objects and a function 
    that transforms the data) */employees,transformation) => {  /* do something */
       return employees.map(employee=>{
                if(employee.occupation==='developer'){
                     transformation.map(transfor=>transfor(employee))
               };
            employee.salary=parseInt(employee.salary)
            return employee
        })
        }
    
    console.log(transformData(employees, transformations))
    
