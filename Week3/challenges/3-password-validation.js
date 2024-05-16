
/**
 * Credit to https://adventofcode.com/ for this exercise
 * 
 * Each object in the passwordList gives a password policy and then the password.
 * The times field says the minimal and maximal amount of times the letter should be in the password. So 1-3 means at least 1 time, at most 3 times.
 * The letter field gives which letter should be counted
 * The password field gives the password
 * 
 * In the list 2 passwords are valid, the middle one is not as there is no b in the password.
 * 
 * We expect the output:
 * 
 * 'abcde' is VALID, a is present 1 times and should have been present at least 1 and at most 3 times
 * 'cdefg' is INVALID, b is present 0 times and should have been present at least 1 and at most 3 times
 * 'ccccccccc' is VALID, c is present 9 times and should have been present at least 2 and at most 9 times
 */

const passwordList = [
    { times: '1-3', letter: 'a', password: 'abcde'},
    { times: '1-3', letter: 'b', password: 'cdefg'},
    { times: '2-9', letter: 'c', password: 'ccccccccc'}
];
 const a=passwordList.forEach( item=>{
    const { password, times, letter } = item;  //destructuring
    const minNum= times.charAt(0)
    const maxNum=times.charAt(2)

    const arrayOfGivenLetter= password.split('').filter(char=>char===letter)
    const numOfOccurance=arrayOfGivenLetter.length
       if(numOfOccurance>=minNum && numOfOccurance<=maxNum){
         console.log(`${password} is VALID, ${letter} is present ${numOfOccurance} times and 
                   should have been present at least ${minNum} and at most ${maxNum} times`);
       }else{
            console.log(`${password} is INVALID, ${letter} is present ${numOfOccurance} times and should have been present at least ${minNum} and at most ${maxNum} times`);

       }
 } )






//  passwordList.forEach( item=>{
//     const { password, times, letter } = item;  //destructuring
//     const minNum=times.charAt(0)
//     const maxNum=times.charAt(2)
//     const pswLettersAsArray=password.split('').filter( char=> char===letter)
//     const amountOfOccurance=pswLettersAsArray.length
//     if(amountOfOccurance>=minNum&&amountOfOccurance<=maxNum){
//         console.log(`${password} is VALID, ${letter} is present ${amountOfOccurance} times and should have been present at least ${minNum} and at most ${maxNum} times`);

//     }else{
//         console.log(`${password} is INVALID, ${letter} is present ${amountOfOccurance} times and should have been present at least ${minNum} and at most ${maxNum} times`);

//     }
    
//  } )

console.log(passwordList[0].password.split(''))//[ 'a', 'b', 'c', 'd', 'e' ]
console.log(passwordList[2].times.charAt(2))//9
console.log(passwordList[0].password.split('').filter(char=> char===passwordList[0].letter))
 /*
let string=psw.password
    char=psw.letter
     let minNum=parseInt(psw.times.charAt(0))
     let maxNum=parseInt(psw.times.charAt(2))
     let count=0;
     for( let i=0; i<string.length;i++){
       let  char=psw.letter
        if(string.charAt(i)===char){
      count++;
        }
     }
 */  
//another practice
passwordList.forEach( item=>{
    const {times,letter,password}=item  //destructuring
    let numOfOccurance=Array.from(password).filter(char=>char==letter).length
    let minOccurance=parseInt(times.charAt(0))
    let maxOccurance=parseInt(times.charAt(2))
    if(numOfOccurance>=minOccurance&&numOfOccurance<=maxOccurance){
        console.log(`${password} is VALID, ${letter} is present ${numOfOccurance} times and should have been present at least ${minOccurance} and at most ${maxOccurance} times`);
    }else{
        console.log(`${password} is INVALID, ${letter} is present ${numOfOccurance} times and should have been present at least ${minOccurance} and at most ${maxOccurance} times`);

    }

})



//
/**
 * Each object in the passwordList gives a password policy and then the password.
 * The length field says the minimal and maximal length the password should be. So 6-12 means the password should have at least 6 characters and at most 12 characters.
 * The complexity field defines the complexity of the password. It can be 'low', 'medium', or 'high'.
 * The password field gives the password.
 * 
 * In the list, 2 passwords are valid, the middle one is not as it does not meet the complexity criteria.
 * 
 * We expect the output:
 * 
 * 'Password123' is VALID, length is 10 characters and meets the complexity criteria.
 * 'abc123' is INVALID, length is 6 characters but does not meet the complexity criteria.
 * 'SecureP@ssw0rd' is VALID, length is 13 characters and meets the complexity criteria.
 */

const myPasswordList = [
    { length: '8-15', complexity: 'medium', password: 'Password123'},
    { length: '8-10', complexity: 'medium', password: 'abc123'},
    { length: '10-20', complexity: 'high', password: 'SecureP@ssw0rd'}
];


myPasswordList.forEach( pswObj=>{
       const {length,complexity,password}=pswObj
      const minLen= length.split('-')[0]
      const maxLen=length.split('-')[1]
        const lenOfPassword=password.length
        if(lenOfPassword>=minLen&&lenOfPassword<=maxLen){
            console.log(`${password} is VALID , the length is ${lenOfPassword} characters and meets the complexity criteria`)
        }else{
            console.log(`${password} is INVALID , the length is ${lenOfPassword} characters and does not meets the complexity criteria`)

        }

})
const maxLen=myPasswordList[1].password.length
console.log(maxLen)



function validatePassword(passwordArray){
    const {length,complexity,password}=passwordArray
   return passwordArray.forEach(pswdObj=>{
    const {length,complexity,password}=pswdObj
        const [minLength, maxLength] = length.split('-').map(Number); // This effectively converts each string element in the array to a number. For example, ['8', '15'] becomes [8, 15].
        const lenOfPassword=password.length
        if(lenOfPassword>=minLength&&lenOfPassword<=maxLength){
            console.log(`${password} is VALID , the length is ${lenOfPassword} characters and meets the complexity criteria`)
        }else{
            console.log(`${password} is INVALID , the length is ${lenOfPassword} characters and does not meets the complexity criteria`)

        }
    })
   
}
console.log(112)
validatePassword(myPasswordList)
console.log(112)
const [minLength, maxLength] = myPasswordList[0].length.split('-').map(Number);
console.log(minLength)