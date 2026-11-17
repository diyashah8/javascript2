// Global variable vs local variable
/* 
1. globlal variable: those variables which are openly declaired on the globlal scope or outside of any function or block are khown as globlal variables.
variables define in globlal scope can be accessed anywhere within the programs.
eg x = 1; //it is declared in global scope. (used anywhere) 

/*2. local variables: those variables which are  declaired inside of a function or a block scope are khown as local variables.  
variables define in local scope can be accessed only inside that particular scope. 
local variables takes precendence over globlal variables in javascripts.
if (true) {
    let x = 6;
    console.log(x)
} (x = 6)
OR
if (true) {
    console.log(x)
} (x = 1) // because first value is 1 as it is global varible so it takes precedence.

let X; //variable declaration
console.log(x) //undefined

let X = 3;
console.log(x) //3


/*Hosting literal meaning -> to pull something to the top.
Hosting in javascript -> it is the deault behaviour of javascript to raise variables 
declared with var and funtion declarations to the top of the scope where it was defined.

console.log(x)
let x; // error

console.log(x)
var X; // undefined

console.log(x) // undefined
var X = 10;
console.log(x) // 10 */

//exercise 
var sport = 'football'
function func1() {
    let messi = 10;
    if (true) {
        console.log(messi) // valid 
        console.log(ronaldo) // valid // undefined
        var ronaldo = 7;
        let messiInPSG = 30;
        console.log(sport) // valid
        console.log(ronaldo) // valid //7
    }
    console.log(messiInPSG) // invalid
    console.log(messi) // valid //10
    console.log(ronaldo) // valid //7 
    console.log(sport)// valid // football
}
console.log(messiInPSG) // invalid
console.log(messi) // invalid
console.log(ronaldo) // invalid
console.log(sport) // invalid


/* Temporal Dead (TDZ) Zone
it is the region where the variable define can't be accessed. 

//why not to use var?
1. var is hoisted
2. variable declared with var can be declared again 
3. var is function scoped
4. variable defined with var is attached to the window object. 


// variables- it is a container that stores value or expression 
let X = '9'  //number
let fruit = 'apple' // string

// expression vs statements
// expression- it is somethings that will eventually resolve to a value 

let y = 5 + 2 * (3 / 1) - 3;  //it is valid to store expression because this expression will resolve to a value.
console.log(y)
// numbers - operands
// -,+,/, - operators   // expression

// statements- it is a block of code that performs an action. it stores values and expression.
let Z = if (true) {
    console.log('hello')
}*/


