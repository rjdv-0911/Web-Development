const  name = 'John';
const age = 36;
const job = 'Web Developer';
const city = 'Manila';
let html;

//without template string (es5)
// html = '<ul><li>Name: ' +
//         name +
//         '</li><li>Age: '+
//         age + 
//         '</li><li>Job: ' +
//         job +
//         '</li><li>City: ' +
//         city +
//         '</li></ul>'
//         ;

//         document.body.innerHTML = html;


function hello(){
    return 'Hello World';
}

//with template string (es6) script?
html = `
    <ul>
    <li>Name:${name} </li>
    <li>Age:${age} </li>
    <li>Job:${job} </li>
    <li>City:${city} </li>
    <li>${hello()}</li>
    <li>${age  > 36 ? 'Over 36': 'Under 36'}</li>

    </ul>
`;

document.body.innerHTML = html;