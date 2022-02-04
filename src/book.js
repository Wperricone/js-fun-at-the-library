function createTitle(bookIdea) {
  return(`The ${bookIdea}`);

}

function buildMainCharacter(name1, age1, pronouns1) {
  return{
    name: name1,
    age: age1,
    pronouns: pronouns1
  }
};

function saveReview(actualReview, reviews) {
//if the array reviews doesn't have the actualReview string in it, it results to false (meaning it is unique)
  if (reviews.includes(actualReview) === false) {
//then add the unique review to the array
  return reviews.push(actualReview);
    }
};
function calculatePageCount (bookTitle) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount;
}
//function saveReview(fanReview, reviews)
// 12 letters in title 20*12= 240 want to actually include the and the spaces

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book;
}

function editBook(book) {
book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
