/*variables allows us to store and manipulates various types of values. for eg- string, numbers, array, object etc
 3 ways to declare a variable in js
const( ES6+), let(ES6+), var(pre ES6)

  note: high level programming language*/

/*Syntax to declare variables:
variableType variableName (identifer)=value
for eg: let x=5;
there is certain set of rules to write an identifier in js.
2. it cannot be start using number  special symbols.
3.the identifiers are case sensative. it means a and A are two different variablesNames. 
eg- let f="Apple"
    let F = "Apple" 
    both f and F are different variables     
4. reversed key are not used. reverse key = if, else, for, while, do, dowhile

B. standard convension for writing variables
to declare a variableName (identifier) camelCase is used. eg-let myNameIsdiya = ''(every letter of every word is capital except the first one)
there are other different cases as. eg- PascalCase(first letter of every word is capital )snake_case(words are separated by underscore) Kebab-case(words are separated by hyphen core)

C. The identifier must descriptive and related the value it holds eg-let x=5, let firstName = "Diya"*/

/*var vs let vs const

 VAR-
1. var is used to declare variable which values can be changed overtime the program 
eg-  x = 4 (value assign / value initialization)
     x = 6 ( value re-assign)
2- re- declaration of variable is possible.
eg- var firstName = "diya"
    var firstName = "yadi"
3. var is function scope
4. var is hoisted

 LET-
1. var is used to declare variable which values can be changed overtime the program
2- re- declaration of variableis not possible. 
3. let is block scope
4. let is not hoisted

 CONST- 
1. it is used to declare constant variables. it means the value stored in the variable declared with const shouldnot and cannot be changed overtime throughout thr program.
    variable declaration only is not possible in constant. eg- PI=3.14, PI=5 (not valid to re-assign value in constant variables)
2- re- declaration of variable is not possible. 
3. const is block scope
4. const is hoisted*/

/* Function scope vs block scope
scope-
scope is the reason between or inside the curly braces.
if the scope is of function it is function scope.
eg- function x(){

}
block scope- other all scope are block scope
eg- if (true){

}
*/



