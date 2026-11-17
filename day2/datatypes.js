/* Datatypes: in js javascript, a data types refers to the type of data that a variable can hold. 
 1. Primitive Datatypes
 2. Non-Primitive Datatypes
 Primitive Datatypes:*/
//1. String ( text, characters )
let num1 = 9
console.log(typeof (num1))

//2. Number (intiger -> 6 , decimals -> 5.6763)
let firstName = 'diya'
console.log(typeof (firstName))

//3. BigInt  ( used to store very large value)
let largeNum = 100n
console.log(typeof (largeNum))


//4. Boolean (used for taking desigion and logical types, it can be either true or fales.)
let isHoliday = false
let isNepali = true
console.log(typeof (isHoliday))

//5. Undefined (when a variable is declared but not assigned any value.)
let age;
console.log(typeof (age))
let x = undefined

//6. Symbol (symbol is a datatypes that makes every value unique even it seem to be exactly same.)
let year1 = Symbol(2026)
let year2 = Symbol(2026)
console.log(year1 === year2)

//7. Null ( to represent empty value)
let y = null
console.log(typeof (y))

//Non-Primitive Datatypes:
// it cannot be stored in call stack, it is stored in heap.
//1. Object 
let person1 = {
    firstName: 'diya',
    lastName: 'shah',
    age: 21,
    isMarried: false
}
console.log(person1)

//2. Array
let daysInWeeks = ['sunday', 'Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
console.log(daysInWeeks)

//JS is dynamically typed programming language, (it means that value of variable can change at runtime.)
// JS is object oriented language.
//
//eg - let x = 9
//x = 'hello'  // it is possible 

let grade = 9
let oldGrade = grade
grade = 10
console.log(grade)
console.log(oldGrade)


let arr1 = [1, 2, 3, 4,]
let arr2 = [arr1]
arr2.push(5)
console.log(arr1)
console.log(arr2)




