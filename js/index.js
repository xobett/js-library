import { addBook, getAllBooks } from "./Service/service.js";
const modal = document.getElementById('modal');

document.getElementById('show-modal-btn').addEventListener('click', function(e) {
    modal.showModal();
});
document.getElementById('close-modal-btn').addEventListener('click', function(e) {
    modal.close();
});

function test(){
    const data = {
        author: 'Creed',
        title: 'Apollo Creed IV',
        pages: 100,
        isRead: true,
    }

    const data2 = {
        author: 'Creed',
        title: 'Apollo Creed III',
        pages: 122,
        isRead: true,
    }

    const success = addBook(data);
    console.log(success)

    console.log(getAllBooks());
}