import { Book } from "../Entities/book.js";

export function seedBookData(){
    const pragmaticDeveloper = new Book("Uncle Bob", "Pragmatic Developer", 200, true);
    const gameDesign = new Book("Uncle Bob", "Game Design", 400, false);
    const dataAlgorithms = new Book("Uncle Bob", "Data Algorithms", 300, false);
    const gameProgramming = new Book("Uncle Bob", "Game Programming", 100, true);
    
    library.push(pragmaticDeveloper, gameDesign, dataAlgorithms, gameProgramming);
}