//objects: objects are non primitive datatypes. 
// Objects are used to store data in a well ordered manner. 
// object stores data in key/value pair or collection and it can store other complex enities as well.
//Syntax of an object
//VariablesType identifer={key1: value1, key2: value2, key3: value3}

//examples 
const person = {
    firstName: 'diya',
    lastName: 'shah',
    birthYear: 2004,
    gender: 'female',
    isMarried: false,
    age: (thisYear) => thisYear - person.birthYear
}
// diya shah was born on 2004. he is ... years old. she is not married.
console.log(`${person.firstName} ${person.lastName} was born on ${person.birthYear}. She is ${person.age(2026)} years old and she is ${person.isMarried ? 'married' : 'unmarried'} till date.`)

// firstName is the key or property and 'diya' is the value
// age is the method in the person object.

// In Js, there are 2 method to access/read data from an object.
// Dot notation
console.log(person.firstName)
console.log(person.birthYear)
//Bracket Notation
console.log(person['firstName'])
console.log(person['lastName'])

//changing values in object 
person.firstName = 'darpan'
person.gender = 'male'
console.log(person)
// adding value in object
person.class = '+2'
console.log(person)

//Custom Objects Method
const person2 = {
    firstName: 'seema',
    lastName: 'shrestha',
    gender: 'female',
    greet: () => console.log(`hello ${person2.firstName} ${person2.lastName}`)

}
person2.greet()

// next eg
const bankAccountBikash = {
    firstName: 'mahendra',
    lastName: 'karki',
    accountNo: 123345,
    currentBalance: 10000,
    fundDeposit: function (amount) {
        bankAccountBikash.currentBalance += amount
        console.log(`Dear ${bankAccountBikash.firstName} ${bankAccountBikash.lastName} Rs${amount} has been deposited in your account no.${bankAccountBikash.accountNo} and your total balance is ${bankAccountBikash.currentBalance}`)

    },
    fundWithDrawal: function (amount) {
        if (this.currentBalance >= amount)
            this.currentBalance -= amount
        console.log(`Dear ${this.firstName},Rs.${amount} is withdrawn from your account no. ${this.accountNo} `)
    }
}


console.log(bankAccountBikash.currentbanalce)
bankAccountBikash.fundDeposit(1222)
console.log(bankAccountBikash.currentBalance)
bankAccountBikash.fundWithDrawal(100000)
