//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

    //UI constructor 
    function UI(){

    }

    //Add a book to list
    UI.prototype.addBookToList = function(book){
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        //Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</td>
        `;
        list.appendChild(row);
    };

    //clear fields
    UI.prototype.clearFields = function(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };

    //local storage
    

    //Event listeners
    document.getElementById('book-form').addEventListener('submit',function(e){
        //Get form values
        const title = document.getElementById('title').value,
                author = document.getElementById('author').value,
                isbn = document.getElementById('isbn').value;

        //instantiate book
        const book = new Book(title, author, isbn);
        //instantiate UI
        const ui = new UI();
       
               
        //validate
        if(title === '' || author === '' || isbn === ''){
            //Error alert 
            ui.showAlert('Please fill in all fields', 'error');
        }else{
            //Add book to list
            ui.addBookToList(book);

            //clear fiels
            ui.clearFields();

            //show access
            ui.showAlert('Book Added', 'success');
        }
 
        e.preventDefault();
    });

    //Show alert 
    UI.prototype.showAlert = function(message, className){
        //Create div and span
        const div = document.createElement('div');
        //add classes
        div.className = `alert ${className}`;
        //Add text 
        div.appendChild(document.createTextNode(message));
        //get parent 
        const container = document.querySelector('.container');
        // get form 
        const form = document.querySelector('#book-form');
        //insert alert
        container.insertBefore(div, form);

        // time out after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
            // console.log('delete');
            target.parentElement.parentElement.remove();
        }
    }

//Event listener for delete 
document.getElementById('book-list').addEventListener('click',function(e){
    //instantiate ui
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);
    ui.showAlert('Book removed!','success');
});

