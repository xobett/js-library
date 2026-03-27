import { addBook, getAllBooks } from "./Service/service.js";

// const library = [];
// const form = document.getElementById('form');

// form.addEventListener('submit', function(){
//     const data = new FormData(form);

//     const [success, message] = addBook(data);
// })

test();

function test(){
    const data = {
        author: 'Creed',
        title: 'Apollo Creed IV',
        pages: 122,
        isRead: true,
    }

    const data2 = {
        author: 'Creed',
        title: 'Apollo Creed III',
        pages: 122,
        isRead: true,
    }

    addBook(data);
    addBook(data2);
    addBook(data2);
    addBook(data2);
    addBook(data2);
    addBook(data2);

    console.log(getAllBooks());
}