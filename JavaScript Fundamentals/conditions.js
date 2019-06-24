/*if(something){
    do something;
}else{
    do something else
}*/

const id = 100;

// //Equal ro 
// if(id == 100){
//     console.log('CORRECT!');
// }else{
//     console.log('INCORRECT!');
// }

// //NOT EQUAL 
// if(id != 101){
//     console.log('CORRECT!');
// }else{
//     console.log('INCORRECT!');
// }

// if(id === 100){
//     console.log('CORRECT!');
// }else{
//     console.log('INCORRECT!');
// }//correct if data type is the same 


// if(id !== 100){
//     console.log('CORRECT!');
// }else{
//     console.log('INCORRECT!');
// }//correct


// if(id == 100){
//     console.log('CORRECT!');
// }else{
//     console.log('INCORRECT!');
// }//correct even if id is string

/*
Test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);   
}else{
    console.log('No ID');
}//the id is 100
*/

// if(id <= 100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// } correct

const color = 'yellow';

// if else
if(color === 'red'){
    console.log('color is red');
}else if(color === 'blue'){
    console.log('color is blue');
}else{
    console.log('color is not red or blue');
}

//logical operators
const name = 'Steve';
const age = 16;

//AND
if(age > 0 && age < 12){
    console.log(`${name} is a child`)
}else if(age >=13 && age <= 19){
    console.log(`${name} is a teenager`)
}else{
    console.log(`${name} is an adult`)
}

//OR ||
if(age <= 16 || age > 65){
    console.log(`${name} cannot run in race`)
}else{
    console.log(`${name} is registed for the race`)
}

//TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect'); // correct

//WITHOUT BRACES
if(id === 100)
    console.log('Correct');
    else
    console.log('Incorrect');

