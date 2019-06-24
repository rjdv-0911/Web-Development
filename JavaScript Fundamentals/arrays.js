//create some arrays
const numbers = [43,45,56,34,44,5];
const numbers2 = new Array (22,34,54,76,65);
const fruit = ['Pear','Banana','Orange','Apple'];
const fmixed = [22,'Hello',true,undefined,null,{a:1, b:2}, new Date()];

let val;


// //get array length
// val = numbers.length; //6

// //Check if is array
// val = Array.isArray(numbers); // true

// //Get single value
// val = numbers[3];//34

//Insert into array
// numbers[2] = 100; //(6) [43, 45, 100, 34, 44, 5]

// //index of value
// val = numbers.indexOf(34);// 3

// //Mutating arrays
    // // Add on to end
    // numbers.push(250); // (7) [43, 45, 56, 34, 44, 5, 250]

    // //add on to front
    // numbers.unshift(120); // (7) [120, 43, 45, 56, 34, 44, 5]

    // //take off of end 
    // numbers.pop(); // (5) [43, 45, 56, 34, 44]

    // //take off of from front
    // numbers.shift(); //(5) [45, 56, 34, 44, 5]

    //splice values - based on numbers = [43,45,56,34,44,5];
    // numbers.splice(1,3);// (3) [43, 44, 5]
    //  numbers.splice(0,3); // (3) [34, 44, 5]
    // numbers.splice(2,3); //index two cuts 3 - (3) [43, 45, 5]

    // //reverse - based on numbers = [43,45,56,34,44,5];
    // numbers.reverse(); // (6) [5, 44, 34, 56, 45, 43]

    // //concatenate array
    // val = numbers.concat(numbers2); // (11) [43, 45, 56, 34, 44, 5, 22, 34, 54, 76, 65]

//     //Sorting arrays - this will be sorted by the orders of the alphabet
//     val = fruit.sort();
//     val = numbers.sort();


// val = numbers.sort(function(x,y){
//     return  x-y;
// }); // (6) [5, 34, 43, 44, 45, 56]

// //  Reverse sort
// val = numbers.sort(function(x,y){
//     return  y-x;
// });  // (6) [56, 45, 44, 43, 34, 5]

// //find 
// function over50(num){
//     return num > 50;
// }
// val = numbers.find(over50); //

//console.log(numbers);
console.log(val);