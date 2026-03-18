// var can be redeclare and reinitiallized both

var a = 13

var a = 15

a = 35
console.log(a)

// let can not be redeclare but can be reinitialized
// Identifier 'b' has already been declared
let b = 15

// let b = 34 redeclaration

b = 35

console.log(b)

// const can not be redeclare and reinitialized both 

const c = 25

// c = 45

// const c = 79

console.log(c)