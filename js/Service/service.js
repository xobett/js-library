import { addBookToLibrary, getAllBooksFromLibrary } from "../Repository/repository.js";

export function addBook(data){
    let success = true;
    let message = null;

    //Check regex for whitespace

    if (isInvalidString(data['author'])){
        success = false;
        message = "Invalid author name";

        return { success, message };
    }

    if (isInvalidString(data['title'])){
        success = false;
        message = "Invalid title name";

        return { success, message };
    }

    if (!Number.isInteger(data['pages']) || Number(data['pages'] < 0)){
        success = false;
        message = "Invalid pages number";

        return { success, message };
    }

    const addedBook = addBookToLibrary(data['author'], data['title'], data['pages'], data['isRead'] ?? false);
    message = addedBook;

    return { success, message };;
}

export function getAllBooks(){
    const books = getAllBooksFromLibrary();

    return books;
}

// HELPERS
function isInvalidString(value){
    return !value || !String(value).trim();
}