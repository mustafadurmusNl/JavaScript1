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
    const emp1=new Employee('Hanna',77)
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
