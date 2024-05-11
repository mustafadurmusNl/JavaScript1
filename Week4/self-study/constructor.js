const anObj = new Object();
anObj.name = "Cool Object";
console.log(anObj)

//factory function
// Defining a blueprint for a person
function createPerson(name, age) {   //easy way of creating an object
    const obj = {
      name: name,
      age: age,
      walk: function () {
        console.log(`${this.name} is walking!`);
      },
    };
    obj.walk()        //
    
    // other code to manipulate our object in some way here
    return obj;
  }              
 const personAlex = createPerson('alex',19)
 console.log(personAlex)   ///first we see  'ALEX IS WALKING  THEN WE SEE THE OBJECT ALEX{.......}


 // Defining a blueprint for a person:
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const personAli=new Person('ali',11)
  console.log(personAli)

  //another ex of constructor
  function Car (make,model){

    this.props={
        make,
        model
    }
    let info=function(){
        return this.props
    }
   // return info()
  }
  const c1=Car('Honda','accord')
  const c2=new Car('Tesla','model 3')

console.log(c1)//UNDEFINED

console.log(c2)//Car { props: { make: 'Tesla', model: 'model 3' } }
//ou may have read about constructor or factory functions before and are now questioning what the difference is. 
//From an outside perspective it does look like it is very similar but there are some advantages to using 
           
         