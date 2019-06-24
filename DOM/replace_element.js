//REPLACE ELEMENT

//Create Element 
const newHeading = document.createElement('h2');

//add id
newHeading.id = 'task-title';

//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading 
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action')

//Replace 
cardAction.replaceChild(newHeading, oldHeading);//first argument yung ipapalit, second argument yung papalitan,

//Remove element
const lis = document.querySelectorAll('li'); //child
const list = document.querySelector('ul'); // parent

//remove list 
lis[0].remove();//it is method if it has parentheses 

//remove child element
list.removeChild(lis[3]);

//Classes and attribute
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];


let val;

//classes
val = link.className;
val = link.classList; /* DOMTokenList(2) ["delete-item", "secondary-content", value: "delete-item secondary-content"]
0: "delete-item"
1: "secondary-content"
length: 2
value: "delete-item secondary-content"
__proto__: DOMTokenList */
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');

val = link;

//Attribute
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com');//second argument yung ipapalit,first argument yung papalitan,
link.setAttribute('title','Google');
console.log(val)