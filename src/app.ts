/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, HTML, TypeScript, Angular, React, Node };

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (param: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

type BookProperties = keyof Book;

function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const numBooks: number = books.length;
    const title: string | undefined = books.find(book => book.available)?.title;
    console.log(`Number of books: ${numBooks}`);
    console.log(`The first available book: ${title}`);
}

function getBookTitleByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();

    return books.filter(book => book.category === category).map(book => book.title);
}

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

// function calcTotalPages(): bigint {
//     const data = <const> [
//         { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//         { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//         { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
//     ];

//     return data.reduce((acc, obj) => acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook), 0n);
// }

function createCustomerId(name: string, id: number): string {
    return `${id}-${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

function getBookById(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id = id);
}

function checkoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`customer: ${customer}`);

    return bookIds.map(id => getBookById(id))
        .filter(book => book.available)
        .map(book => book.title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    let titles: string[];

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            titles = books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            titles = books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            titles = books.filter(book => book.available === available && book.id === id).map(book => book.title);
        }
    }

    return titles;
};

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTranfrom(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
};

// =========================
// Task02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitleByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));

// Task 03.01
// const myId = createCustomerId('Ann', 10);
// console.log(myId);
// let idGenerator: (name: string, id: number) => string =
//     (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerId;
// console.log(idGenerator('Boris', 11));

// Task03.02
// createCustomer('Viachaslau', 28, 'Homiel');
// console.log(getBookTitleByCategory());
// logFirstAvailable();
// console.log(getBookById(1));
// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task03.03
// const checkOutBooks = getTitles(2, false);
// console.log(checkOutBooks);

// Task03.04

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };

// printBook(myBook);

// myBook.markDamaged('missing back cover');

// Task 04.02

// let logDamage: DamageLogger;
// logDamage = (reason: string) => console.log(`Damage logger: ${reason}`);
// logDamage('reason');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'Anna@gmail.com',
//     numBooksPublished: 10
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris.gmail.com',
//     department: 'Fantastic',
//     assistCustomer: (name: string) => console.log(name)
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer?.magazine);
// console.log(offer?.magazine?.getTitle());
// console.log(offer?.book?.getTitle());
// console.log(offer?.book?.authors[0]);

// Task 04.05
console.log(getBookProp(getAllBooks()[0], 'title'));
console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
console.log(getBookProp(getAllBooks()[0], 'available'));