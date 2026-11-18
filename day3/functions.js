/* functions: a function is basically a block of code that can execute a specific task. the value or action performed by a function can be achieved when we call or invoke a function. 
 A function consists of a function name (to write function names we have to follow the rules of writing identifires). A function contains a paranthesis whwer parameters can be contained.
 In js, there are 3 ways to declared a function. They are
 1. Function declaration
/* syntax: 
function functionName(){
    code to be executed
}
    for eg: Create a function that says hello world */
function greetings() {
    console.log('Hello World')
}
// calling a function 
greetings()
// parameter function
function saysHello(name) {
    console.log(`Hello ${name}`)
}
saysHello('diya')
saysHello('darpan')
saysHello('mahendra')
saysHello('kajal')

// eg: Create a function that calculates your age
function calcAge(birthYear) {
    const thisYear = 2026
    console.log(2026 - birthYear)
}
calcAge(2004)
calcage(2003)

// 2. function Expression
// 3. Arrow Function (ES6+)

