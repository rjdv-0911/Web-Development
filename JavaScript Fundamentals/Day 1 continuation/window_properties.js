//window methods,object and properties

//alert
//alert('hello world');

//prompt
// const input = prompt();
// alert(input); //

//confirm
// if(confirm('Are you sure')){
//     console.log('Yes')
// }else{
//     console.log('No')
// }

let val;
// //Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;
// console.log(val); // 828 -the outer height of the window

// //Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;
// console.log(val); // 828 -the outer height of the window

//Scroll points
// val = window.scrollY;
// val = window.scrollX;
// console.log(val); 

//Location Object
// val = window.location;
// val = window.location.hostname; //127.0.0.1
// val = window.location.port; // 5500
// val = window.location.href; // http://127.0.0.1:5500/index.html
// val = window.location.search;

//Redirect
// window.location.href = "http://www.google.com"

//Reload
//window.location.reload(); paste this to console

// window.history.go(1);//means two history
//val = window.history.length;

//Navigator Object
// val = window.navigator;
val = window.navigator.appName; //netscape
val = window.navigator.appVersion; 
val = window.navigator.userAgent;
val = window.navigator.platform; 
val = window.navigator.vendor; 
val = window.navigator.language; 

console.log(val);
