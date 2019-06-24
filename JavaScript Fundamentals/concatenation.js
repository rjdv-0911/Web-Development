const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Bobby';
const tags = 'Web Design, Web Development and Programming';

//Concatenation
let val;
val = firstName + lastName;
val = firstName + ' ' + lastName;

//Append 
val = 'Bobby';
val += 'Ferrer';

val = 'Hello, my name is ' + firstName + 'and I am ' + age ;

//Escaping
val = "That's awesome, I can't wait" // not using single quote to distinguish variable and string

//Length
val = firstName.length; // 7

//Concat
val = firstName.concat(' ',lastName); //William Johnson

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2]; // if you want to get the index of 2 which is letter 'l'

//indexOf()

val = firstName.indexOf('l'); // vice versa 
val = firstName.lastIndexOf('l');//index of the last 

//charAt()
val = firstName.charAt(4); // i

//Get last char
val = firstName.charAt(firstName.length - 1);// index 7 - 1 = 6 to get the last character - m
val = firstName.charAt(firstName.length - 2);// index 7 - 1 = 6 to get the last character - a

//substring
val = firstName.substring(0,4); // output : Will
val = firstName.substring(1,4);// output: ill

//slice
val = firstName.slice(0,4); // output: Will
val = firstName.slice(1,5); // output: Willi
val = firstName.slice(-3); // output: iam

//split
val = str.split(' '); //it becomes array word by word
val = tags.split('');//it becomes array but without space the output will be letter by letter

//replace
val = str.replace('Bobby','Jack'); //Find First Parameter in the string and it will be replaced by Second Para (Jack) - 

//includes
val = str.includes('Hello'); // true 
val = str.includes('Jack'); // false




console.log(val);