// Array is a non primitive datatype. Aray are special type of objects in JS 
// which is uswd to store multiple values in a single variables.
// eg-
//array of fruits
const fruits = ['apple', 'banana', 'mango', 'orange', 'kiwi', 'grapes']
//array of years
const year = [2000, 1995, 1994, 1996, 2001, 2003,]
// array of colors
const color = ['red', 'green', 'blue', 'yellow', 'pink', 'orange']
// array of cities
const cities = ['kathmandu', 'pokhara', 'biratnagar', 'chitwan', 'lumbini']

//array of mixed datatypes
const mixedarr = ['ram', 29, true, null, 'fruit']

// empty arrray
const emptyarr = []

console.log(typeof (fruits))

//syntax to create an array using array literal
// variablesatypes variableName = [el1, el2, el3,.......elN]

// Array Constructor
const fruit2 = new Array('apple', 'banana', 'mango', 'orange', 'kiwi', 'grapes')
console.log(fruit2)

//Data of an array is called element of an array using its index.
const fruit = ['apple', 'mango', 'watermelon', 'kiwi', 'grapes']
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])
console.log(fruit[4])
console.log(fruit[9])// undefined 

//Create an array using index
const years = []
years[0] = 1995
years[1] = 1996
years[2] = 1997
years[3] = 1998
years[4] = 1999
years[7] = 2002 // this will create an 'array holes' because 
// there are no elements defined in 5th snd 6th index of that repective array.

console.log(years)
console.log(years[6])

//properties and methods of arrays
//length
const fruit3 = ['apple', 'mango', 'watermelon', 'kiwi', 'grapes']
console.log(fruit3.length)

// methods of array 
//indexof() -> this method returns index of the 
// elements that is passed as an argunment in the methods call.
console.log(fruit3.indexOf('kiwi'))//4
console.log(fruit3.indexOf('banana'))//-1 since it doesn't exist in the array.
console.log(fruit3.indexOf('dragnfruit'))//-1 since it doesn't exist in the array.

//includes() -> this method returns to the boolean value based on the arugment passed. 
console.log(fruit.includes('banana'))//false
console.log(fruit.includes('apple'))//true

//methods that mutates the array(changes the original array)
// push()-> this method add an elements to the end of the array.
fruit.push('kiwi', 'cheery')
console.log(fruit)

//pop()-> It removes the elements from an array 
console.log(fruit.pop())

//unshift-> It add new element in the beginning of an array 
let names = ['ram', 'shyam', 'gita', 'hari', 'sita']
names.unshift('ami',)
console.log(names)

//shift -> It removes the first elements of an array.
names.shift()
console.log(names)

