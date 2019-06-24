//Get local text file data
const getText = () => {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

const getJSON = () => {
    fetch('post.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output ='';
        data.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


const getExternal = () => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output ='';
        data.forEach(user => {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getExternal);