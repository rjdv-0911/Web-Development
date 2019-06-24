const num1 = 100;
const num2 = 50;
let val;


//Simple math with numbers
val = num1 + num2; //150
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 * num2; //5000
val = num1 % num2; //0

//Math Object
val = Math.PI; //3.141592653589793
val = Math.E; // 2.718281828459045
val = Math.round(2.4); // 2
val = Math.ceil(2.4)// 3
val = Math.floor(2.4) // 2
val = Math.sqrt(64) // 8
val = Math.abs(-3) // 3
val = Math.pow(8,3) //512
val = Math.min(8,3,14,23443) //3
val = Math.max(8,3,14,23443) //23443
val = Math.random();
val = Math.random() * 10 + 1; // if 1 is not added to max of random number indicated, count would start with 1 but will not reach 10
val = Math.floor(Math.random() * 10 + 1); // shows abs/whole number

//What is template string



console.log(val)