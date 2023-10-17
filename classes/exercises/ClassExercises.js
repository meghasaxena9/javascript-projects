// Define your Book class here:
<<<<<<< HEAD
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       this.title = title;
       this.author = author;
       this.copyright = copyright;
       this.isbn = isbn;
       this.pages = pages;
       this.timesCheckedOut = timesCheckedOut;
       this.discarded = discarded;
    }
 
    checkout(uses=1) {
       this.timesCheckedOut += uses;
    }
 }
 
 class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = 'Yes';
       }
    }
 }
 
 class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(){
       if (this.timesCheckedOut > 100) {
          this.discarded = 'Yes';
       }
    }
 }

// Define your Manual and Novel classes here:
let Novel = 
let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
// Declare the objects for exercises 2 and 3 here:

let currentYear = new DataView().getFullYear();
makingTheShip.dispose(currentYear);
makingTheShip.checkout(5);
console.log(makingTheShip);
// Code exercises 4 & 5 here:goodRead.checkout(5);
goodRead.dispose();
=======


// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
