const reverString=require('./reversestring')
test('reverseString function exist',()=>{
    expect(reverString).toBeDefined()
})

test('reverseString function reverse a string',()=>{
    expect(reverString('hello')).toEqual('olleh')
})
