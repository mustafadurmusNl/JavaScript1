// const cloneArray=require('./cloneArray')
// const functions=require('./cloneArray')
const { cloneArray, functions } = require('./cloneArray');
const axios=require('axios');


test('properly clones array',()=>{
    const array=[1,2,3]
    expect(cloneArray(array)).toEqual(array) //the cloned array is not the exact copy of [1,2,3]  just equal array
})      //array(non primitive data) is verified by its value and its reference adress in the heap memory,
                                 //so we assert arrays by toEqual()method
      //however primitive datas are verified by their value only so we assert  primitive datas by toBe() method
/*
test('properly clones array',()=>{
    const array=[1,2,3]
    expect(cloneArray(array)).not.toBe(array)      //this test also passes bcs the cloned array and the array we pass are not exactly same
})
*/
test('admin should be in usernames',()=>{   // it passes
    usernames=['John','Karen','Samantha','admin']
    expect(usernames).toContain('admin')
})
test('multiply',()=>{
    expect(functions.multiply(2,3)).toBe(6)
})

//working with a async data
// test('user fetched name should be Leanne Graham',async()=>{
//     expect().assertions(1);
//     const data=await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham')
// })