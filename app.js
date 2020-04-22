class Book {

    constructor() {
        this.Books = {};
        this.bookName ="";
    }

    async getBooks() {
        console.log("obtiene los books de bitso");
        const request = await fetch("https://api.bitso.com/v3/available_books/");
        this.Books = await request.json();

        console.log(this.Books)
    }

    set Name(name) {
        this.bookName = name;
    }

    get Name() {
        return this.bookName;
    }
}


const Bitso = new Book();
Bitso.getBooks();