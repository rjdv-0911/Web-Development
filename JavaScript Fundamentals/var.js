//var, let and const 

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


// Init var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

//variable can start with - letters, numbers, _, $,
//variable name - cannot start with numbers

//Multiwords vars
// var firstName = 'John'; // Camel Case
// var first_Name = 'Sara'; // Underscore 
// var FirstName = 'Tom'; // Pascal Case (Do not use it in OOP, because it may look like a constuctor)


// Init let
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


//Init const
const name = 'John';
console.log(name);
//cannot reassign

const person = {
    name: 'John',
    age : 30
} // person variable , anything inside the {} is object and name and age is properties 

person.name = 'Sara';
person.age = '32';
console.log(person); // const allows to change the properties
console.log(person.age); 

const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
numbers.pop();