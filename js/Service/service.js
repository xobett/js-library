import { addBookToLibrary, getAllBooksFromLibrary, getBookById, deleteBook } from "../Repository/repository.js";

export function addBook(data){
    let ok = true;
    let message = null;

    if (isInvalidString(data['author'])){
        ok = false;
        message = "Invalid author name";

        return { ok, message };
    }

    if (isInvalidString(data['title'])){
        ok = false;
        message = "Invalid title name";

        return { ok, message };
    }

    const pages = Number(data['pages']);
    if (!Number.isInteger(pages) || pages <= 0){
        ok = false;
        message = "Invalid pages number";

        return { ok, message };
    }

    const book = addBookToLibrary(data['author'], data['title'], data['pages'], data['isRead'] ?? false);
    message = "Book added successfully!";

    return { ok, message, book };
}

export function toggleIsRead(id){
    const book = getBookById(id);
    book.isRead = !book.isRead;

    console.log(book);
}

export function deleteBookFromLibrary(id){
    deleteBook();
    console.log(getAllBooks());
}

export function getAllBooks(){
    const books = getAllBooksFromLibrary();
    return books;
}

// HELPERS
function isInvalidString(value){
    return !value || !String(value).trim();
}