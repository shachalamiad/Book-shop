'use strict';

function onInit() {
    renderBooks();
}

function renderBooks() {
    var books = getBooks();
    var strHTMLs = books.map(function (book, idx) {
        return `

        <div class="list-body clean-list">
            <div class="cell book-id">${book.id} </div>
            <div class="cell book-name"> ${book.name} </div>
            <div class="cell book-price"> ${book.price} </div>
            <div class="buttons">   
            <button class="read-button cell" onclick="onReadBook(${book.id})">Read</button>
            <button class="update-button cell" onclick="onReadAndUpdateBook(${book.id})">Update</button>
            <button class="delete-button cell" onclick="onRemoveBook(${book.id})" title="Remove this Book">Delete</button>
            </div>
            </div>`
    })
    document.querySelector('.table-content').innerHTML = strHTMLs.join('');
}

function onRemoveBook(bookId) {
    var isSure = confirm('Are you sure?')
    if (!isSure) return;
    removeBook(bookId);
    renderBooks();
}

function onReadBook(bookId) {
    renderReadBookModal(bookId);
    document.querySelector('.close-modal-btn').style.display = 'block';
    document.querySelector('.read-book-modal').style.display = 'block';
    // toggleModal();
}

function renderReadBookModal(bookId) {
    var currBook = getCurrBook(bookId);
    var elReadBookModal = document.querySelector('.read-book');
    var strHTML = '';
    strHTML += `<div>
    <div>${currBook.name}</div>
    <div>Book number: ${currBook.id} </div>
    <div>Price: ${currBook.price}</div>
    <div><img src="img/${currBook.img}"></div>
    <div>Lorem...</div>
    <div>Rating</div>
    </div>`
    elReadBookModal.innerHTML = strHTML;
}

    // <p><button onclick="onRateBook(this, ${bookId})">-</button> Rating
    // <button onclick="onRateBook(this, ${bookId})">+</button></p>

function closeReadBookModal() {
    document.querySelector('.close-modal-btn').style.display = 'none';
    document.querySelector('.read-book-modal').style.display = 'none';
}

function onAddBook() {
    renderAddBookModal();
}

function renderAddBookModal() {
    var elAddBook = document.querySelector('.add-book');
    elAddBook.style.display = 'block';
    var strHTML = '';
    strHTML += `
    <div class="add-book-modal">
    <input id="book-name" placeholder="Please enter book name">
    <input id="book-price" placeholder="Please enter book price">
    <button class="insert-new-book" onclick="onInsertNewBook()">Insert book</button>
    </div>`
    elAddBook.innerHTML = strHTML;
}

function onInsertNewBook() {
    var bookName = document.getElementById("book-name").value
    var bookPrice = document.getElementById("book-price").value;
    if (!bookName || !bookPrice) return;
    addBook(bookName, bookPrice);
    renderBooks();
    closeModal();
}


function onReadAndUpdateBook(bookId) {
    var bookPrice = +prompt('Enter new price?')
    updateBook(bookId, bookPrice);
    renderBooks();
    renderReadBookModal(bookId)
}
