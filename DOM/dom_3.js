// document.getElementsByClassName

//querySelector all = []

// const items = document.querySelectorAll('.collection-item');
/*
dom_3.js:8 
NodeList(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
0: li.collection-item
1: li.collection-item
2: li.collection-item
3: li.collection-item
4: li.collection-item
length: 5
__proto__: NodeList*/

//const items = document.getElementsByClassName('collection-item');
/*HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
0: li.collection-item
1: li.collection-item
2: li.collection-item
3: li.collection-item
4: li.collection-item
length: 5
__proto__: HTMLCollection */


// console.log(items);
// console.log(items[2]);
// items[2].style.color = 'red'; //ways to know if you get the right element

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);//same output with const items = document.getElementsByClassName('collection-item');

// //document.getElementsByTagName();
// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';

// //Convert HTML Collection into array to use foreach
// lis = Array.from(lis);
// //lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hey`;
// });

// //using array function
// lis.forEach((li, index) => {
//     console.log(li.className);
//     li.textContent = `${index}: Hey Arrow function`;
// });

// //document querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');
// /* NodeList(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// 0: li.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-item
// length: 5
// __proto__: NodeList */

// // items.forEach(function(item, index){
// //     item.textContent = `${index}: hello`;
// // });


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

console.log(liOdd);
console.log(liEven);

liOdd.forEach(function(li, index){
    li.style.background = 'cyan';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'pink';
}



