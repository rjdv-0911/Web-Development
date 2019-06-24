let val;
//Number to String

val = String(555);

val = String(4 + 4);
//Boolean String
val = String(true);
//Date to String
val = String(new Date());
//Array to String
val = String([1,2,3,4]);
//toString
val = (5).toString(); //toString is a method
val = true.toString(); //toString is a method

//String to Number
val = Number('5');//5 - blue 
val = Number(true); //1
val = Number(false); //0
val = Number(null); // 0
val = Number('hello');
val = Number([1,2,3]);
val = parseInt('100.30'); //convert in to whole number
val = parseFloat('100.30'); //convert in to float with decimal even if its string

//String() and Number() is a constructor
const val1 = String(5); 
const val2 = 6;
const sum = Number(val1 + val2); // 56 - blue



//Output
console.log(sum);
console.log(typeof sum);




