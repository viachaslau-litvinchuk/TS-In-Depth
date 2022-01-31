/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
};

enum Category { JavaScript, CSS, HTML, TypeScript, Angular };

type Book = { id: number; category: Category; title: string; author: string; available: boolean };
type Library = { lib: string; books: number; avgPagesPerBook: number };

function getAllBooks(): readonly Book[] {
    const books: Book[] = [
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];

    return books;
};

function logFirstAvailable(books: readonly Book[]): void {
    const numBooks: number = books.length;
    const title: string = books.find((book) => book.available)?.title;

    console.log(`Number of books: ${numBooks}\n
    First avaible book: ${title}`
    );
};

function getBookTitlesByCategory(category: Category): string[] {
    const titles: string[] = getAllBooks().filter(book => book.category === category).map(book => book.title);
    return titles;
};

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
};

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
};

function calcTotalPages(): BigInt {
    const libraries: Library[] = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return libraries.reduce((sum, obj) => sum + BigInt(obj.avgPagesPerBook * obj.books), 0n);
};

// Task02.01
console.log(getAllBooks());
logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log(getBookAuthorByIndex(2));
console.log(calcTotalPages());

// Task 02.02
