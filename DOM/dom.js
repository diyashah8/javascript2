/*
1.DOM- stands for Document Object Model, IT is a programming interface for HTML and XML.
DOM represents the web pages so that the script can change the style, structure, content etc.
The DOM represents each elements and text contents as nodes.
2. The DOM represents the structure of a web pages in a hierarchical (tree-like) atructure/model
where each elements, attributes, text content in the HTML document is represented as a "Node".*/

//Accessing the DOM nodes in JS

//To access the nodws of DOM, we have several methods

//Methods that access or select oe select one nodes only

//.getElementById

const div1 = document.getElementById('d-1')
console.log(div1)

//.querySelector
//querySelector selects the nodes based on CSS-selector
const heading1 = document.querySelector('h1')
console.log(heading1)
//selecting by id using querySelector
const div2 = document.querySelector('#d-2')
console.log(div2)

//selecting by class using querySelector
const para2 = document.querySelector('.para-2')
console.log(para2)

//Methods that access or select  multiple nodes and returns nodelist.
//Nodelist is the collection of HTML nodes which seems like an array.

//.getElementByClassName
const paragraph = document.getElementsByClassName('para')
console.log(paragraph)

//.getElementByTagName
const divs = document.getElementsByTagName('div')
console.log(divs)

//querySelectorAll
//querySelectorAll-  returns the node list of all the elements that matches the CSS-selector.
const paragraphByQS = document.querySelectorAll('.para')
console.log(paragraphByQS) 