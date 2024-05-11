const video = {
    title: 'a',
    tags:['a','b','c'],
    play() {
        console.log(this);
    },
    showTags(){
        this.tags.forEach(tag =>console.log(this.title,tag))   //bcs of the power of arrow function  this keyword refers title 'a'
    }
}

video.stop = function() {
    console.log(this);
}

video.stop(); // { title: 'a', play: [Function: play], stop: [Function] }

function Video(title) {
    this.title = title;
    console.log(this);
}

const v1 = new Video('b');// a new video object with title b

video.showTags()

// ******attention
//if arrow function is a callback function in another function then it has acess to parent scope ,
//and this keyword in arrow function refers object in this case refers object user
//otherwise if arrow function is the single function in the object then this keyword refers window
const user={
    firstName:'Patrick',
    lastName:'Scott',
    fullname:function(){
        console.log(this)   //this refers object Patrick
        console.log(`${this.firstName}  ${this.lastName}`)  //Patrick Scott
    }
}
user.fullname()

const user2={    //in this example arrow function can cnot access object scoope  
    firstName:'john',     //here this key word refers window     so this.firstname is undefined
    lastName:'doe',        //arrow function should be inside a function as a callback function inorder to access parent scope and help this keyword to refer object
    fullname:()=>{
        console.log(this)   //window
        console.log(`${this.firstName}  ${this.lastName}`)// undefined
    }
}
user2.fullname()
// *********
const user3={     //in here arrow function inherit the nearest parent function scope
    firstName:'alex',
    lastName:'de souza',
    fullname:function(){
        const arrowFunction=()=>{
        console.log(this)  //{firstname:alex  lastname:desouza  function:fullname}
        console.log(`${this.firstName}  ${this.lastName}`)   //Alex de souza
     }
     arrowFunction();  //this call invokes the arrow function and arrow funtion access the parent scope
                        // and this key word refers object Alex
}
}
user3.fullname()
//
const user4={
    firstName:'Nicolas',
    lastName:'Anelka',
    hobbies:['programming','tennis'],
    listHobbies:function(){
        console.log(this)  //refers object
      this.hobbies.forEach(function(hobby){  //forEach function has its scope only no parent scope
         console.log(this.firstName)   //refers window so prints  undefined
        console.log( hobby)
      })
    }
}
user4.listHobbies()

const user5={
    firstName:'Nicolas',
    lastName:'Anelka',
    hobbies:['programming','tennis'],
    listHobbies:function(){
        console.log(this) 
      this.hobbies.forEach( function(hobby){   
         console.log(this.firstName)    //Nicolas
        console.log( hobby)             //progrmmin and then Noicolas tennis 
      }
      ,this )  
   
    }
}
user5.listHobbies()

//this keyword with constructor

