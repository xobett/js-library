import { Book } from "../Entities/book.js";

export const library = [];

export function addBookToLibrary(author, title, pages, isRead){
    const book = new Book(author, title, pages, isRead);
    library.push(book);

    return book;
}

export function getAllBooksFromLibrary(){
    return [...library.values()];
}