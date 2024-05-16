class Person1 {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    talk(sentence) {
      console.log(sentence);
    }
  
    sleep() {
      console.log("Zzzzzzzzz....");
    }
  }
  //  To create a real Person, we have to instantiate it:
  const aisha = new Person1("Aisha", 25, "Female");

    aisha.talk("Hi! My name is Aisha!"); // Result: Hi! My name is Aisha!
    console.log(aisha.age)
    console.log(aisha.sleep())

    //The class will create an instance and therefore you can use the instanceof keyword to check 
//if something is an instance of that specific class.
 //Consider the following://a class over a constructor function.

 /** CONSTRUCTOR FUNCTION **/
function PersonFunction(name, age) {
    return { name, age };
  }
  const fadi = PersonFunction("Fadi", 22);
  console.log(fadi instanceof PersonFunction); // false
  console.log(fadi)  //{ name: 'Fadi', age: 22 }  not an instance of a class
  
  /** CLASSES **/
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const reema1 = new PersonClass("Reema", 25);
  console.log(reema1 instanceof PersonClass); // true
   console.log(reema1)   // PersonClass { name: 'Reema', age: 25 }  an instance of a class 
   
   //privare vs public (encapsulation)
   //A good practice in programming is to ensure that not every part of your code has access to every other part of code. 
   //It helps avoid bugs, helps keep sensitive data safe and also keeps your code maintainable. When using classes this is called encapsulation 
   //and the most basic version is to set certain methods or values to private.
   class Person {
    #name;    // #symbol for privatizing
  
    constructor(name, age) {
      this.#name = name;
      this.age = age;
    }
  
    getName() {
      return this.#name;
    }
  }
  const reema = new Person("Reema", 25);//PersonClass { name: 'Reema', age: 25 }
  //console.log(reema.#name); // undefined
  console.log(reema.getName()); // Reemaa  ?????




  class Person2 {
    #firstName;
    #lastName;
  
    constructor(name, age) {
      // This name algorithm is obviously way too simplistic for all the types of names that exist in the world :)
      const nameTokens = name.split(" ");
      this.#firstName = nameTokens[0];
      this.#lastName = nameTokens[1];
      this.age = age;
    }
  
    getFirstName() {
      return this.#firstName;
    }
  
    getName() {
      return `${this.#firstName} ${this.#lastName}`;
    }
  }
  const emke = new Person2("Emke Smith", 25);
  console.log(emke.getName()); // Emke Smith
  console.log(1239)
