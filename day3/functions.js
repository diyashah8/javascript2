/* functions: a function is basically a block of code that can execute a specific task. the value or action performed by a function can be achieved when we call or invoke a function. 
 A function consists of a function name (to write function names we have to follow the rules of writing identifires). A function contains a paranthesis whwer parameters can be contained.
 In js, there are 3 ways to declared a function. They are */
// 1. Function declaration - syntax: function functionName(){ code to be executed}
//for eg: Create a function that says hello world 
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
    const age = 2026 - birthYear
    console.log(`you are ${age} years old this year`)
    return `your are   beautiful`
}
// when there is no return keywords in the function it will return undefined
const ourAge = calcAge(2004)
console.log(ourAge)
calcAge(2003)

// eg: show hello diya you are 21 years old
function calcAgeWithName(name, birthyear) {
    const thisYear1 = 2026
    const age = thisYear1 - birthyear
    console.log(`hello ${name} you are ${age} year old`)
}
calcAgeWithName('diya', 2004)

// 2. function Expression: variableType functionName =(assignment operator) function(){}
let greeting = function () {
    return ('Hello World')
}
let x = greeting()
console.log(x)

let greetingg = function () {
    return ('Hello World')
}
console.log(greetingg())

// 3. Arrow Function (ES6+)
// It is a shorthand way to create a function. 
// Syntax:
//variable_type functionName =() => {}

const prayer = () => console.log('ohh god')

prayer()

//parameterized Arrow Function
const greetingwithName = (name) => console.log(`hello ${name}`)
greetingwithName('diya')
greetingwithName('darpan')
greetingwithName('sita')
greetingwithName('mahendra')

const calcagewithName = (name, birthyear) => console.log(`hello ${name}, you are ${2026 - birthyear}`)
calcagewithName('shyam', 2000)

// create and arrow function that returns the sum of two numbers.
const sum = (num1, num2) => { return num1 + num2 }
console.log(`The sum of num1 and num 2 is ${21 + 22}`)

// create a function that takes a number and returnes true if the number
//  is even and returns false if the number is odd.
const isEven = (num) => {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(`It is ${isEven(5)}`)

// create a function to cheak when were you 16 years old.
// 14-> you'll be 16 in 3 years
// 19-> you were  16 3 years ago
// 16-> you're sweet 16

const check = (age) => age >= 16 ?
    (age > 16 ? `you were 16 ${age - 16}years ago` : `you are 16 years old`)
    : `you will be 16 in ${16 - age}years`
console.log(check(11))
console.log(check(16))
console.log(check(19))

