// document.getElementById(); 

console.log(document.getElementById('task-title'));//<h5 id="task-title">Tasks</h5> - Task is text node

//Get things from the element
console.log(document.getElementById('task-title').id); //task-title
console.log(document.getElementById('task-title').className); //test

const taskTitle = document.getElementById('task-title');

//Change styling 
// taskTitle.style.background = '#333'; //
// taskTitle.style.color = '#fff'; //font-color
// taskTitle.style.padding = '5px'; //font-size
// taskTitle.style.display = 'none'; //font-padding

//Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Task'; //almost the same with textContent
taskTitle.innerHTML = '<span style="color: red">Task List</span>';//adds another tag ,span becomes a child
taskTitle.outerHTML = '<span style="color: red">Task List</span>';//change parent element <h5>

//document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(even)').style.background = 'purple';
document.querySelector('li:nth-child(odd)').style.background = 'cyan';

