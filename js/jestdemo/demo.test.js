// usage jest
// best add dependency at root workspace.
// first init env : npm init -y ,second install dependency : npm i jest --save-dev , 
//use plugin 
// be ataction should define the test script extation as .text.js


const {sum, times} = require('./demo1')

test('caculate sum 2+2+2+2+2+2 ',()=>{
  expect(sum(2+2+2+2+2+2)).toBe(12)
})

test('caculate  times 2,6',()=>{
  expect(times(2,6)).toBe(12)
})

test('diff two fun times(2,6) and sum(2+2+2+2+2+2)',()=>{
  expect(times(2,6)).toEqual(sum(2+2+2+2+2+2))
})