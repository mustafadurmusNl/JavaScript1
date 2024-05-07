const subtract = require('./subtract')
const sum=require('./subtract')
test('properly subtract two numbers',()=>{
    expect(subtract(1,2)).toBe(-1)
})

test('should be less then 1600',()=>{
    const a=800
    const b=700
    expect(a+b).toBeLessThan(1600)
})
//regex
test('there is no I in team',()=>{   // it passes
    expect('team').not.toMatch(/I/)
})
//array
test('admin should be in usernames',()=>{   // it passes
    usernames=['John','Karen','Samantha','admin']
    expect(usernames).toContain('admin')
})