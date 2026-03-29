import { Book } from "../Entities/book.js";

export const library = [];

export function addBookToLibrary(author, title, pages, isRead){
    const book = new Book(author, title, pages, isRead);
    library.push(book);

    return book;
}

export function getBookById(id){
    const book = library.find((book) => book.id == id);
    return book;
}

export function deleteBook(id){
    const bookIndex = library.indexOf((book) => book.id == id);
    library.splice(bookIndex, 1);
}

export function getAllBooksFromLibrary(){
    return [...library.values()];
}