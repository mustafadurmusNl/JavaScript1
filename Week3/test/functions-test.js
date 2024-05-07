const functions=require('./functions')


test('multiplication testing',()=>{
    expect(functions.multiply(2,3)).toBe(6)
})