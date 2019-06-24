// document.getElementById('button').addEventListener('click',function(){

// });

document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    //Create an XHR object  
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET','data.txt',true);//it has 3 parameters, first is, get,post,delete a data, put is for update, 2nd parameter is string  or file or API, true means asynchronous
    xhr.onload = function(){
        // console.log('READYSTATE',xhr.readyState);
        if(this.status === 200){
        // console.log(this.responseText);
        document.getElementById('output').innerHTML= `<h1 >${this.responseText}</h1>`;
        }
    }

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE',xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    // xhr.onerror = function(){
    //     console.log('Request error...')
    // };


    xhr.send();

    //readyState values
    /*
    0: request not initialized
    1: server connection established    
    2: request receive
    3: processing request
    4: request finished and response is ready
    */

    //HTTP Statuses
    /*
    - 200: "OK"
    - 403: "Forbidden"
    - 404: "Not Found"
    */
}
        

