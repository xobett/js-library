export function Book(author, title, pages, isRead = false){
    if (!new.target){
        throw new Error('Target not defined');
    }
    this.id = crypto.randomUUID();
    this.author = String(author).trim();
    this.title = String(title).trim();
    this.pages = parseInt(pages);
    this.isRead = Boolean(isRead);
}