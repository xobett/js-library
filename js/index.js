const library = [];

seedBookData();

function addBookToLibrary(author, title, pages, isRead){
    try {
    } catch (error) {
        console.log(error);        
    }

    library.push(book);
}

function Book(author, title, pages, isRead = false){
    if (!new.target){
        throw new Error('Target not defined');
    }
    this.id = crypto.randomUUID();
    this.author = String(author).trim();
    this.title = String(title).trim();
    this.pages = parseInt(pages);
    this.isRead = Boolean(isRead);
}

function seedBookData(){
    const pragmaticDeveloper = new Book("Uncle Bob", "Pragmatic Developer", 200, true);
    const gameDesign = new Book("Uncle Bob", "Game Design", 400, false);
    const dataAlgorithms = new Book("Uncle Bob", "Data Algorithms", 300, false);
    const gameProgramming = new Book("Uncle Bob", "Game Programming", 100, true);

    library.push(pragmaticDeveloper, gameDesign, dataAlgorithms, gameProgramming);
}