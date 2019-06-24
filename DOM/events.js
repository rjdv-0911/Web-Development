document.querySelector('.clear-task').addEventListener('click',function(e){
    //console.log('Hello World');
    e.preventDefault();
});//e means event, first argument in addEvenlistener is action, second is function

document.querySelector('.clear-task').addEventListener('click',onClick);

function onClick(e){
    let val;
    //console.log('Clicked');
    val = e;

    //Event target element
    val = e.target.className; //clear-task btn black waves-effect
    val = e.target.classList; /* DOMTokenList(4) ["clear-task", "btn", "black", "waves-effect", value: "clear-task btn black waves-effect"]
    0: "clear-task"
    1: "btn"
    2: "black"
    3: "waves-effect"
    length: 4
    value: "clear-task btn black waves-effect"
    __proto__: DOMTokenList */

    val = e.type;
    e.preventDefault();

    //timestamp
    val = e.timeStamp;

    //coord events relative to the window
    val = e.clientY;
    val = e.clientX;
    
    //Coords event relative to the element
    val =e.offsetY
    val =e.offsetX


    console.log(val)
};