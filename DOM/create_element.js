//Create element

const li = document.createElement('li');

// Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';


// Add attribute
li.setAttribute('title','New Item');

//create text node and append 
li.appendChild(document.createTextNode('Hello World'));

//create new link element
const link = document.createElement('a');

//add classes
link.className = 'delete-item secondary-content';

//Add icon html
link.innerHTML = '<i class="fas fa-user-times"></i>';

//Append link into li
li.appendChild(link);

//append li as child to ul
document.querySelector('ul.collection').appendChild(link);

console.log(li)