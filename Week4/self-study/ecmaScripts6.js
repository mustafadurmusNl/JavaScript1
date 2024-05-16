//creating object by ecmaScript6
//creating object by class in ecmaScript6
//old style
function Employee1(name,age,salary){
    this.name=name
    this.age=age
    this.salary=salary
 }
 Employee1.prototype.showInfo=function(){
    console.log(`name is: ${this.name} age is :${this.age} and salary is: ${this.salary}`)

 }
 const emp1=new Employee1('Alper',27,4000)
 console.log(emp1)
 emp1.showInfo()//name is: Alper age is :27 and salary is: 4000


//now new style with ecmascript6 by class structure
class Employee{

    constructor(name,age,salary){   //in ecscript 6  we dont need to sat function constructor
       this.name=name
       this.age=age
       this.salary=salary
  }
 showInfo(){   //it is stored in prototype of every object created
    console.log(`name is: ${this.name} age is :${this.age} and salary is: ${this.salary}`)

}

}
const emp2=new Employee('Jessica',29,5000)
console.log(emp2)
emp2.showInfo()

//static methods in ecs6
//we re able to use class memebers without creating an object instance if its static

class Mathamatics1{
    cube(x){
        console.log(x*x*x)
    }
}
const math1=new Mathamatics1()
math1.cube(3)//27

//we can access cube () method without creating an object
class Mathamatics{
   static cube(x){
        console.log(x*x*x)
    }
}
Mathamatics.cube(2)//8
const math= new Mathamatics()
//math.cube(2)//Error \:'math.cube is not a function' bcs static methods are  not stored in object's prototype *****

Math.sqrt(9)//sqrt() method is a static method in MATH CLASS SO WE ACCESS BY CLASS NAME  JUST LIKE jAVA


//INHERITANCE BETWEEN CLASS
class Person3{   //superclass
    constructor(name,age){
        this.name=name
        this.age=age
    }
    showInfo(){   //it is stored in prototype of every object created
        console.log(`name is: ${this.name} age is :${this.age} and salary is: ${this.salary}`)
    
}
}
class Employee3 extends Person3{   //childclass
    constructor(name,age,salary){
        // this.name=name
        // this.age=age
        super(name,age)                //it means use the constructor of super class
       // super.showInfo()      //use showInfo () of super class
        this.salary=salary
    }
    
    showInfo(){  // overriding parent method  
        console.log(`child class method, name is: ${this.name} age is :${this.age} and salary is: ${this.salary}`)
    
}
}
const emp3=new Employee3('Angelica',49,7000)
console.log(emp3)
emp3.showInfo()//inhetirance