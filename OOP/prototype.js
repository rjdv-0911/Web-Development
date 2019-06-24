//Prototype 
//Oject.Prototype
//Person.Prototype


//person constructor 
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

}

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return  Math.abs(ageDate.getUTCFullYear() - 1970); //calculate age
}

//Get full name
Person.prototype.getFullName = function(newLastName){
    return `${this.firstName} ${this.lastName}`;
}
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '9-30-83');
const mary = new Person('Mary', 'Johnson', 'March 20 1990');

// console.log(mary.calculateAge());
// console.log(john.calculateAge());

mary.getsMarried('Ferrer');

// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary);
// console.log(mary.hasOwnProperty('getFullName'));



