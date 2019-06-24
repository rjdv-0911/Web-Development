// // Object Literal
// const person = {
//     name : 'John'
// }

// //Person constructor
// function Person(name){
//     this.name = 'John';
// }

// const john = new Person();
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// } // keyword this refers to the constructor Person

// console.log(this);


// const john = new Person('Bob',36);
// console.log(John.age);

// CONSTRUCTOR AND THIS KEYWORD
// Person constuctor 
function Person(name, dob ){
    this.name = name;
    this.birthday  = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const bob = new Person('bob','5-13-1983');
// const bob = new Person('bob','may-13-1983');
// const bob = new Person('bob','05/13/1983');

console.log(bob.calculateAge());
