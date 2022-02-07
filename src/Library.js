
//use a function to create an object

function createLibrary(name1, shelf1) {
return {

  name: name1,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: []


  }
}
};

function addBook(library, book) {
  //take var dracula and put it in shelves.fantasy
  if (book.genre === "fantasy") {

    library.shelves.fantasy.push(book)

  }
  if (book.genre === "fiction") {
    library.shelves.fiction.push(book)
  }

if (book.genre === "nonFiction") {
  library.shelves.nonFiction.push(book)
}
// library.shelves[book.genre].push(book) this is how it would work with bracket notation- turns three if statements into one line of code
};

function checkoutBook (library, book, genre) {
for (var i = 0; i < library.shelves[genre].length; i++)
{
if (book === library.shelves[genre]) {
  return `"You have now checked out ${book} from the ${library.name}.`
}
}
};
//f (book === library.shelves[genre.genre] [i].title{
//library.shelves[genre].splice(i, 1)
})
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
