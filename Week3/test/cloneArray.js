function cloneArray(array){
    return [...array]
}

const functions={
    multiply :(num1,num2)=>num1*num2,
    isNull:()=>null,
   fetchUser:()=>axios.get('https://jsonplaceholder.typicode.com/users/1')
   .then(res=>res.data)
   .catch(err=>'error')
}
//module.exports=cloneArray
module.exports={
    cloneArray,
    functions
}
