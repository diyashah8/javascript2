// there are 3 main types of loops in js that are used in most of the programming languages. They are 
//1. for loop
// A for loop is a type of loop which is used to loop whenthe numbers of iteration is khown in advance.
// syntax for loop 
//for (initialization; condition; increment/decrement){
//block of code to be executed}

// Examples of for-loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// print numbers from 10 to 0
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
// print all the  even numbers upto 20
for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}
// print all the  odd numbers upto 20
for (let i = 1; i <= 20; i = i + 2) {
    console.log(i)
}
// print upto 30 number and show which is odd or even.
for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}

//OR
for (let i = 1; i <= 30; i++) {
    let iseven = i % 2 === 0
    console.log(`it is ${iseven ? 'even' : 'odd'} because it  ${iseven ? 'is' : 'is not'} divisible by 2`)
}

//2. while loop
// It is the type of loop which is used to do interaction when developers don't khow the numbers of beforehand.
//syntax of while loop 
// while(condition){
// code to be exceuted when the code is true}

// print numbers from 0 to 4
let i = 0
while (i < 5) {
    console.log(i)
    i++
}

//print first 20 number using loops
let q = 0
while (q <= 20) {
    console.log(q)
    q++
}
//print first 20 even number using loops
let a = 2
while (a <= 20) {
    if (a % 2 === 0)
        console.log(a)
    a++
}

// Infinite while loop
// while(true){
//statement here will be executed}
/* eg- let s = 0
while (s < 5) {
    console.log(s)
}*/

//3. do -while loop
// It is the type of loop which is similar to while loop but it executes the code 1 times before cheaking the conditions.
/*Syntax:
do{
code to be exement
}while (condition)*/

// print no. from 0 to 4
let z = 0
do {
    console.log(z)
    z++
} while (z < 5)
