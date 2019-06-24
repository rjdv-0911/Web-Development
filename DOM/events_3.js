const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//Clear input   
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// //keydown
// taskInput.addEventListener('keydown',runEvent);

// //keyup -
// taskInput.addEventListener('keyup',runEvent);

// //keypress 
// taskInput.addEventListener('keypress',runEvent);

// //focus 
// taskInput.addEventListener('focus',runEvent);

// //blur
// taskInput.addEventListener('blur',runEvent);

// //cut    
// taskInput.addEventListener('cut',runEvent);

// //PASTE  
// taskInput.addEventListener('paste',runEvent);

// //PASTE  
// taskInput.addEventListener('input',runEvent);

// //change
taskInput.addEventListener('change',runEvent);

// //blur
select.addEventListener('change',runEvent);

function runEvent(e) {
    console.log(`Event type: ${e.type}`)
    console.log(e.target.value);
    
    heading.innerText = e.target.value;
    console.log(taskInput.value);
    e.preventDefault();
}