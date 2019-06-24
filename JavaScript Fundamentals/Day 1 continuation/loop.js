//ES5
//FOR Loop
for(let i = 0; i < 10; i++){
    
    if(i == 2){
        console.log('2 is my favorite number');
        continue; // this is method - for the loop to continue after it meets it's condition
    }
    if(i === 5){
         console.log('Stop the loop');
         break; // this is method - for the loop to continue after 
    }
console.log('Number ' + i )
}

//WHILE Loop
// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

//DO WHILE
// let i = 1;

// do{
//     console.log('Number ' + i);
//     i++;
// }while(i < 10);


// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// for(let i = 0 ;i < cars.length; i++){
//     console.log(cars[i]);
// }

//ES6
// //For Each
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array)
// });

// //Map 
// const users = [{id: 1, name: 'John'},{id: 2, name: 'Sara'},{id: 3, name: 'Steve'}];//array has an object

// const ids = users.map(function(user){
//     return user.name;
// });//method using array

// console.log(ids);// (3) ["John", "Sara", "Steve"]

//FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
};

for(let x in user){
    console.log(`${x} : ${user[x]} `)
}
