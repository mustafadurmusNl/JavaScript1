function Employee(name,age){   //a constructor
    this.name=name,
    this.age=age,
    this.showInfo=function(){                       //defining a function in constructor is memory consuming
        console.log('it displays the info')
    }
    
}
Employee.prototype.fullName=function(){                             //we put this function out of constructor and we define it in prototype of the constructor
    console.log(`my name is ${this.name} and my age is${this.age}`)  //every object we create can acess this function by inheritance from prototype
}                                                                 //in this way we same memory
//every object we create by constrcutor can access the above funtion created in the protoype by inheritance
    const emp1=new Employee('Jackson',77)
    console.log(emp1)

    console.log(emp1.toString())//toString is a method of object prototype and our
                                // object instance inherit this method from parent protoypr
console.log(emp1.fullName()) // emp1 object instance can inherit the fullName() function from parent prototype

//Object.create()  we create a new object by using an existing object and inheriting its prototpye for our new object

const person = {    //an object
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);  //creating an object with an existing object

  
  me.name = 'Ali'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  // Expected output: "My name is Ali. Am I human? true"


  //
  const obj={
    test1:function(){
        console.log('test1')
    },
    test2:function(){
        console.log('test2')
    }
  }
  const emp=Object.create(obj)
  emp.name='Peter'
  emp.age=22
  console.log(emp.name)
  //
//another exm  abit advanced and inheritance 
function Person3(){   //constructor without parameter

}
Person3.prototype.test3=function(){
    console.log('test3 is a function defined in prototype of Person3 constructor ')
}
Person3.prototype.test4=function(){
    console.log('test4')
}
const person3 =new Person3();
   console.log(person3)
   //another constructor
function Employee3(name,age){
     this.name=name
     this.age=age
}
Employee3.prototype=Object.create(Person3.prototype)//emp3 prototype inherit the features of Person3 prototype
const emp3=new Employee3('emke',35)
console.log(emp3.name)//emke
console.log(emp3)//it inherit prototypes of Person3
console.log(emp3.test3)//it can access test3 function of Person3 prototype
emp3.test3()//test3 is a function defined in prototype of Person3 constructor
Employee3.prototype.myTest=function(){
    console.log('myTest function defined in Employee prototype')
}
console.log(emp3)
