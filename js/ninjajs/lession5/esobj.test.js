const {Ninja} =  require("./esobj")

var ninja = new Ninja("tester");

console.log(ninja.swingsword())
console.log(ninja.name)
test('ninja object ',()=>{
    expect(ninja.name).toBe('tester')
  })
// console.log(ninja.name)
// console.log(ninja.swingsword())