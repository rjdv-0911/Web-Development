let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem;
val = list.childNodes;
/*
child_element.js:10 
NodeList(11) [text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text]
0: text
1: li.collection-item
2: text
3: li.collection-item
4: text
5: li.collection-item
6: text
7: li.collection-item
8: text
9: li.collection-item
10: text
length: 11
__proto__: NodeList*/ //even the space would signify as text, even the breakline

val = list.childNodes[0];//text
val = list.childNodes[1].nodeName;//LI
val = list.childNodes[3].nodeType;//3


//Get Children of element nodes
val = list.children; // this will give you li
val = list.children[1].textContent ='hello'; 

//Children of Children
list.children[3].children[0].id = 'test-link'; // children is the parent ,same as ul to li, list is the ul

val = list.children[3].children[0];

//First Child
val = list.firstChild;
val = list.lastElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;


//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

//Get prev item
val = listItem.nextSibling; //hello
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // hello

//text node is a child, children is a
val = listItem.previousSibling;//#text
val = listItem.previousElementSibling;//null 
console.log(val);