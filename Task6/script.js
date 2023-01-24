// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add(book,bookName) {
 let copyBooks = [...book]
  copyBooks.push(bookName);
  return copyBooks;
  
 
}


function remove(book,bookName) {
   let copyBooks = [...book]
  const book_index =copyBooks.indexOf(bookName);
  if (book_index >= 0) {

    copyBooks.splice(book_index, 1);
    return copyBooks;

    
    }
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
 
function getOutput(){
    document.getElementById("output").innerText= newBookList ;
    document.getElementById("output1").innerText= newerBookList ;
    document.getElementById("output2").innerText=newestBookList;
}