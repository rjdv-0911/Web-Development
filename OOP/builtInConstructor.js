/*Build in Constructor
 - String 
 
 */

 //String
 const name1 = 'Jeff';
 const name2 = new String('Jeff');


//  if(name2 === 'Jeff'){
//     console.log('Yes');
//  } else {
//      console.log('No');//because name2 is a subject
//  }

//  //Number 
//  const num1 = 5;
//  const num2 = new Number(5);

//  console.log(num2); //constructor has a function , prototype is a function

// //Boolean 
// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(bool1);

//function
const getSum1 = function(x , y){
    return x + y;
}

const getSum2 = new Function('x','y','return 1 + 1');
console.log(getSum2);

//Object
const john1 = {name: 'John'};
const john2 = new Object({name : 'john'});
console.log(john2);


//Arrays 
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr2);//the same with arr1
