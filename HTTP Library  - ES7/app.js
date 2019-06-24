//Sample normal function without async await
// function myFunc(){
//     return 'Hello';
// }
// console.log(myFunc());

//Async Await
// async function myFunc(){
//     return 'Hello';
// }

// console.log(myFunc());

//Using then
// async function myFunc(){
//     return 'Hello';
// }
// myFunc().then(res => console.log(res));


// async function myFunc(){
//     const promise = new Promise((resolve, reject) =>{
//         setTimeout(()=> resolve('Hello'), 2000);
//     });

//     const error = false;
//     if(!error){
//         const res = await promise;// Wit until promise is resolved
//         return res;
//     } else{
//         await Promise.reject(new Error('Something went wrong'));
//     }

// }
// myFunc().then(res => console.log(res)).catch(err => console.log(err));

/*

async function getUsers(){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //Ony proceed once its resolve
    const data = await response.json();
    //only procees once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users))
.catch(err => console.log(err));

const app = {
    name : 'John Doe',
    username : 'johndoe',
    email: 'jdoe@gmail.com' 
    }

async function getPost(data){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify()
    });
    //Ony proceed once its resolve
    const dat = await response.json();

    //only procees once second promise is resolved
    return dat;
}

getPost().then(users => console.log(users))
.catch(err => console.log(err));

async function getPut(data){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1',{
        method: 'PUT',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    //Ony proceed once its resolve
    

    const data = await response.json();
    //only procees once second promise is resolved
    return app;
}

getPut().then(users => console.log(users))
.catch(err => console.log(err));

async function getDelete(data){
    //await response of the fetch call
    const response = await  fetch('https://jsonplaceholder.typicode.com/users/1',{
        method: 'DELETE',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    //Ony proceed once its resolve
  
    const data = await response.json();
    //only procees once second promise is resolved
    return 'Resource Deleted';
}

getDelete().then(users => console.log(users))
.catch(err => console.log(err));
 */

const http = new EasyHTTP();

//Get user data
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

const data = {
    name : 'John Doe',
    username : 'johndoe',
    email: 'jdoe@gmail.com' 
    };

//POST
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err))


//PUT
http.put('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err))


//DELETE
http.delete('https://jsonplaceholder.typicode.com/users/1',data)
.then(data => console.log(data))
.catch(err => console.log(err))