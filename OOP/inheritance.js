// PROTOTYPE INHERITANCE
// Person Constructor 

function Person(firstName, lastname){
    this.firstName = firstName;
    this.lastName = lastname;
}

//Greeting
Person.prototype.greeting = function(){
    return `Hello There! ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John','Doe');
console.log(person1.greeting());

//Customer constructor 
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);// Person declares his property 
    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype); // ipass yung 

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('John','Doe','555-5555','Standard');
console.log(customer1);

//Customer 
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());
