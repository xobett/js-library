import { addBook, getAllBooks, deleteBookFromLibrary, toggleIsRead } from "./Service/service.js";
const modal = document.getElementById('modal');
const messageModal = document.getElementById('message-modal');
const form = document.getElementById('form');

const libraryContainer = document.querySelector('.library-container');
console.log(libraryContainer)

document.getElementById('show-modal-btn').addEventListener('click', function(e) {
    modal.showModal();

});
document.getElementById('close-modal-btn').addEventListener('click', function(e) {
    modal.close();
});

//MAIN ENTRY

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const success = addBook(data);
    displayMessage(success.ok, success.message);

    if (success.ok){
        addDOMBook(success.book);
    }

    form.reset();
})

function displayMessage(ok, message){
    modal.close();
    messageModal.showModal();

    messageModal.querySelector('.result').textContent = ok ? "Success" : "Error";
    messageModal.querySelector('.message').textContent = message;

    setTimeout(() => messageModal.close(), 2000);
}

function addDOMBook(book){
    console.log(book);
    const template = document.getElementById('book-template');
    const node = template.content.cloneNode(true);
    
    node.querySelector('.title').textContent = book.title;
    node.querySelector('.author').textContent = `Written by: ${book.author}`;
    node.querySelector('.pages').textContent = `${book.pages} pages`;
    
    const checkbox = node.querySelector('#is-read');
    checkbox.checked = book.isRead;
    checkbox.setAttribute('data-id', book.id);
    checkbox.addEventListener('change', function(e) {
        toggleIsRead(book.id);
    });

    const deleteBtn = node.querySelector('.btn-danger');
    deleteBtn.setAttribute('data-id', book.id);
    deleteBtn.addEventListener('click', function(e) {
        deleteBookFromLibrary(book.id);
        const parentNode = this.parentNode.parentNode;
        parentNode.remove();
    })


    libraryContainer.appendChild(node);
}