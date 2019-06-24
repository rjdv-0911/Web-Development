//define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load event listeners
loadEventListeners();//own function

//load all event listeners

function loadEventListeners(){
    //Add task event
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTask);
    filter.addEventListener('keyup',filterTask);
}

    //Add task
        function addTask(e){
            if(taskInput.value === ''){
                alert('Add a task');
            }

            //Create li element
            const li = document.createElement('li');

            //Add a class
            li.className = 'collection-item';
            
            //Create text node append to li
            li.appendChild(document.createTextNode(taskInput.value));

            //create link
            const link = document.createElement('a');

            //add class
            link.className = 'delete-item secondary-content';

            //add icon html
            link.innerHTML = `<i class="far fa-trash-alt"></i>`;

            //append link to li
            li.appendChild(link);

            //append li to ul
            taskList.appendChild(li);

            taskInput.value = '';


        e.preventDefault();
    }

    //Remove task 
    function removeTask(e){
        if(e.target.parentElement.classList.contains('delete-item')){
            if(confirm('Are you sure?')){
                e.target.parentElement.parentElement.remove();
            }

        }
    }

    function clearTask(e){
        taskList.innerHTML= '';

        // while(taskList.FirstChild){
        //     taskList.removeChild(tasklist.FirstChild);
        // }
    }

    function filterTask(e){
        const text = e.target.value.toLowerCase();
        document.querySelectorAll('.collection-item').forEach(function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }else{
                task.style.display = 'none';
            }
        });
    }



