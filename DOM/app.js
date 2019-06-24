//set local storage item 

// localStorage.setItem('name','John')// key : string, value:string
// localStorage.setItem('age','30');

// //set session storage item
// sessionStorage.setItem('name','Doe');//mawawala pag pinatay pc o browser

// //remove from storage
// localStorage.removeItem('name');

// //get from storage
// const age = localStorage.getItem('age'); // kinuha yung value


// //clear local storage 
// localStorage.clear();


document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').value; // kinuha yung value sa input 
    
    let tasks; //instantiate

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    
    tasks.forEach(function(task){
        console.log(task);
    });

    e.preventDefault();
});
