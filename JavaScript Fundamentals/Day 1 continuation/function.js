//THREE KINDS Of FUNCTION

//FUNCTION DECLARATION - you're declaring a function followed by name
// function greet(firstName = 'John', lastName = 'Doe'){
//     //argument or variable
//     if(typeof firstName === 'undefined'){
//         firstName = 'John';
//     }

//     if(typeof lastName === 'undefined'){
//         lastName = 'Doe';
//     }

//     console.log('Hello');
//     //es5 - return 'Hello ' +  firstName + ' ' + lastName;
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet());

//FUNCTION EXPRESSION - variable = function()
// const square  = function(x = 3){ 
//     return x * x;
// }
// console.log(square());

//Immediately Invokable Function Expression is for patterns - IIFE's
(function(){
    console.log('IFFE ran..')
})();

(function(name){
    console.log('Hello ' + name);
})('bob'); // function is a callback


//Property Methods - property would have a method using function
//way 1
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
};//property of the add is a function // todo = object

//way 2
todo.delete = function(){
    console.log('Delete to do');
}

todo.add(); // user-defined function
todo.edit(); // user-defined function
todo.edit(22); // user-defined function
todo.delete(); // user-defined function