'use strict';
const BOOKS_KEY = 'books';
const booksInPageCount = 4;

var gNextId = 101;
var gCurrPage = 0;
var gBooks;

createBooks()
console.log(gBooks)


function createBooks() {
    var books = loadBooksFromStorage();
    if (!books || books.length === 0) {
        books = [createBook('20,000 Leagues Under the Sea', 50, '20000underthesea.jpg'),
        createBook('Momo', 25, 'Momo.jpg'),
        createBook('The Brothers Lionheart', 80, 'brotherslionheart.jpg')];
    }
    gBooks = books;
    saveBooksToStorage();
}


function createBook(name,price,img) {
    return {
        id: gNextId++,
        name: name,
        price: price,
        img: img
    }
}

function getBooks() {
    var startIdx = booksInPageCount * gCurrPage;
    return gBooks.slice(startIdx, startIdx + booksInPageCount);
}

function getCurrBook(bookId) {
var currBook = gBooks.find(function(book) {
    return book.id === bookId
})
return currBook;
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book){return book.id === bookId})
    if (bookIdx === -1) return;
    gBooks.splice(bookIdx, 1);
    saveBooksToStorage();
}

function addBook(name, price, img) {
    var book = createBook(name, price,img);
    gBooks.push(book);
    saveBooksToStorage();
}

function updateBook(bookId, bookPrice) {
    var book = gBooks.find(function(book){
        return book.id === bookId
    })
    if (!book) return;
    book.price = bookPrice;
    saveBooksToStorage();
}


function saveBooksToStorage() {
    saveToStorage(BOOKS_KEY, gBooks)
}

function loadBooksFromStorage() {
    return loadFromStorage(BOOKS_KEY);
}