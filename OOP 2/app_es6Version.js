//Book constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI constructor 
class UI {
    constructor() {
    }
    //Add a book to list
    addBookToList(book) {
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
    }
    //clear fields
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    //Show alert 
    showAlert(message, className) {
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
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteBook(target) {
        if (target.className === 'delete') {
            // console.log('delete');
            target.parentElement.parentElement.remove();
        }
    }
}


    //local storage
    class Store{
        static getBooks(){
            let books;
            if(localStorage.getItem('books') === null){
                books = [];
            }else{
                books = JSON.parse(localStorage.getItem('books'));
            }
            return books;
        }

        static displayBooks(){
            const books = Store.getBooks();
            books.forEach(function(book){
                const ui = new UI; // instantiate to use it
                ui.addBookToList(book);
            });

        }// when using static you can call other functions, if not you have to instantiate

        static addBook(book){
            const books = Store.getBooks();
            books.push(book);
            localStorage.setItem('books',JSON.stringify(books));
        }

        static removeBook(isbn){
            const books = Store.getBooks();
            books.forEach(function(book, index){
                if(book.isbn === isbn){
                    books.splice(index, 1);
                }
            });

            localStorage.setItem('books', JSON.stringify(books))
        }
    }

    document.addEventListener('DOMContentLoaded', Store.displayBooks);
    

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

            Store.addBook(book);//Add to LS

            //show access
            ui.showAlert('Book Added', 'success');
        }
 
        e.preventDefault();
    });



//Event listener for delete 
document.getElementById('book-list').addEventListener('click',function(e){
    //instantiate ui
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);

    //remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('Book removed!','success');
});

