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
//3. do -while loop 