//Global Scope

var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ',a,b,c);
}
test();


//Block Scope
if(true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope: ',a,b,c);
};// this has the ability to change the global var from assigned value inside the block 

for(let a = 0; a < 10; a++){
    console.log(`Loop : ${a}`);
}//var has a problem ,the last assigned value would appear in an output even it is inside the loop

console.log('Global Scope: ',a,b,c)