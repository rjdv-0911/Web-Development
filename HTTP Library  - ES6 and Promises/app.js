const http = new EasyHTTP;

//get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))//gets data if 
.catch(err => console.log(err));

const data = {
    name : 'John Doe',
    username : 'johndoe',
    email: 'jdoe@gmail.com'
}

//Update post
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err));