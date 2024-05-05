'use strict'
// Методи перебору масиву

const books = [
    { title: "1984", author: "Джордж Оруелл", genre: "Соціальна фантастика", pages: 328 },
    { title: "Колгосп тварин", author: "Джордж Оруелл", genre: "Соціальна фантастика", pages: 286 },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 256 },
    { title: "Гаррі Поттер і таємна кімната", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 336 },
    { title: "Гаррі Поттер і в'язень Азкабану", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 448 },
    { title: "Гаррі Поттер і келих вогню", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 608 },
    { title: "Гаррі Поттер і орден Фенікса", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 864 },
    { title: "Гаррі Поттер і Принц-півкров", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 704 },
    { title: "Гаррі Поттер і смертельні реліквії", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 608 },
    { title: "Франкенштейн", author: "Мері Шеллі", genre: "Жахи", pages: 280 },
    { title: "Три товариші", author: "Еріх Марія Ремарк", genre: "Роман", pages: 592 },
    { title: "Матильда", author: "Роальд Даль", genre: "Дитяча література", pages: 240 },
    { title: "Маленький принц", author: "Антуан де Сент-Экзюпери", genre: "Філософська проза", pages: 96 },
    { title: "Триумфальна арка", author: "Еріх Марія Ремарк", genre: "Роман", pages: 515 },
    { title: "Американський психопат", author: "Брет Істон Елліс", genre: "Художній роман", pages: 399 },
    { title: "Коротка історія часу", author: "Стивен Гокінг", genre: "Наукова література", pages: 256 },
    { title: "Заводи", author: "Тед Х'юз", genre: "Історія", pages: 672 },
    { title: "Смерть в Венеції", author: "Томас Манн", genre: "Психологічний роман", pages: 128 },
    { title: "Вікторія", author: "Дейв Ітонс", genre: "Альтернативна історія", pages: 592 },
    { title: "Таємниці Старого Норвегії", author: "Дерек Б. Міллер", genre: "Фентезі", pages: 656 },
    { title: "Дивна смерть", author: "Пол К. Фейр", genre: "Детектив", pages: 384 },
    { title: "Війна майбутнього", author: "Герберт Йенс", genre: "Наукова фантастика", pages: 384 },
    { title: "Думка", author: "Стівен Кінг", genre: "Жахи", pages: 432 },
    { title: "Воно", author: "Стівен Кінг", genre: "Жахи", pages: 502 },
    ]
    console.log(books);

    
//1) Поверніть перший об'єкт з жанру Роман
    /**
     * 
     * @returns {object}
     */
    function firstGenreRoman() {
        return this.find(book => book.genre === 'Роман');
    }
    console.log(firstGenreRoman.call(books));
    

//2) Поверніть останній індекс об'єкту з жанру Роман
    /**
     * 
     * @returns {number}
     */
    function lastIndexGenre() {
        const genre = 'Роман';
        return this.findLastIndex(book => book.genre === genre);
         
    }
    console.log(lastIndexGenre.call(books));

//3) Поверніть масив книг з жанром Фентезі де кількість сторінок більше 600
    /**
     * 
     * @returns {Array}
     */
    function booksFantasi() {
        const resultBooksFantasi = this.filter(function(book) {
            return book.genre === 'Фентезі' && book.pages > 600
        })
        return resultBooksFantasi;
    }
    console.log(booksFantasi.call(books));


//4) Поверніть масив з назв книг
    /**
     * 
     * @returns {Array}
     */
    function titleBooks() {
        const titleBooks = this.map(function(book) {
            return book.title
        })
        return titleBooks;
    }
    console.log(titleBooks.call(books));


//5) Напишіть функцію, яка приймає аргументи: масив книг books, автора і жанр, і повертає масив назв книг(переданого автора і жанру)
    /**
     * 
     * @param {string} author 
     * @param {string} genre 
     * @returns {Array}
     */
    function isBooksAuthor(author, genre) {
        const booksGenreAuthor = this.filter(function(book){
            return book.author === author && book.genre === genre; 
        });
        const booksTitle = booksGenreAuthor.map(function(book) {
            return book.title
        })
        return booksTitle;
    }
    console.log(isBooksAuthor.call(books, 'Мері Шеллі', 'Жахи'));


//6) Порахуйте кількість книг з жанром Фентезі (треба фільтром отримати новий масив і дістати його довжину)
    /**
     * 
     * @param {string} genre 
     * @returns {number}
     */
    function getGenreBookCount(genre) {
        const booksGenreFantasy = this.filter(function(book){
            return book.genre === genre;
        });
        return booksGenreFantasy.length;
    }
    console.log(getGenreBookCount.call(books, 'Фентезі'));
        

//7) Порахуйте кількість книг з кількість сторінок від 200 до 400
    /**
     * 
     * @returns {number}
     */
    function getCountPages() {
        const minPages = 200;
        const maxPages = 400;
        const countPages = this.filter(function(book) {
            return book.pages >= minPages && book.pages <= maxPages;
        });
        return countPages.length;
    }
    console.log(getCountPages.call(books));


//8) Знайдіть книжку з найменшою кількістю сторінок (треба відсортувати та вивести елемент з індеком 0)
    /**
     * 
     * @returns {string}
     */
    function bookMinPages() {
        this.sort(function(minNumber, maxNumber) {
            return minNumber.pages - maxNumber.pages;
        });
        return this[0].title;
    }
    console.log(bookMinPages.call(books));