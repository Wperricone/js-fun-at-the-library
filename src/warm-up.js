// Read the instructions for each of the warm up exercises carefully. This may
// seem repetitious or pedantic at first, however it's very important that you
// become comfortable with these fundamental concepts. Do not move on to
// iteration 1 until you are confident that you've completed all of iteration 0.


//------------------------- Variables -------------------------//


// Initialize two new variables, "title", and "pages", and assign values to them with
// a book's title and page count.

// var title = "Harry Potter";
// var ...
var title = "Good Morning Monster";
var pages = 200;




// Reassign (not initialize) your "pages" variable from above. An editor came around and
// condensed the book, use a built in math operator to make the page count a quarter
// of what it currently is
pages = (pages / 4);


// Initialize a new variable "movie", but leave it undefined
var movie



// Create a variable named "sequel", and assign it to a be a sequel of your
// book (made up or not!). Your sequel must make use of your "title" variable from above
var sequel = (`${title} Part Two`);



// Initialize a new variable "isFavorite", and assign it to a boolean value indicating
// if the book you chose is your favorite book or not
var isFavorite = false



// Create a new variable named "isShortStory", and use a comparison operator to
// assign a boolean value to this variable. If "pages" is less than 25, the
// variable should be true, otherwise it should be false. You MUST use a
// comparison operator.
var isShortStory = 50;
  if (isShortStory <= 25) {
    console.log(true)
  }  else if (isShortStory >25) {
      console.log(false);
  }


//------------------------- Conditionals -------------------------//


// Express the following in code: If the variable "pages" is less than 1000 log
// the statement 'I could read that in a day!', otherwise, log the statement
// 'Ok, maybe I could read that in a day and a half'
function dayReading() {
if (pages <= 1000)
  console.log("I could read that in a day!");
else (pages > 1000)
  console.log("Ok, maybe I could read that in a day and a helf");
}

// Express the following in code: If the variable "isFavorite" is true,
// log the statement 'My favorite book is [title]!'. Otherwise, log the
// statement 'I recently read the [title] book'. In either case, the value stored in
// the "title" variable should be included in the logged statement.
var isFavorite = false
function favorite() {
  if (isFavorite = true)
   console.log(`"My favorite book is ${title}!"`);
    else (isFavorite = false)
     console.log(`"I recently read the ${title} book."`)

}


//------------------------- Arrays -------------------------//


// Create a new variable "books" and assign it to an Array of 5 different
// book titles, represented by their names as Strings.
var books = ['Good Morning Monster', 'The Trauma Cleaner', 'The Bible', 'Harry Potter', 'Blubber']

// Write the code to access the 3rd element of the Array, using bracket
// notation.
books[2];


// Create a new variable "belowTwoHundred" and assign it to an Array of 12
// different numbers below two hundred.
var belowTwoHundred = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Write the code to access the 5th element of the array, using bracket notation.
belowTwoHundred[4];

//------------------------- Objects -------------------------//

// Create a new variable "dictionary" and assign to it an object literal with two
// keys: name, and hasThesaurus. The value for name should the string 'Webster's', and
// the value for hasThesaurus should be false
var dictionary = {
  name: "Webster's",
  hasThesaurus: false
};

// Write the code to add the key of pageCount, with the value of 720. Use dot
// notation to do this. DO NOT modify your code from above.
dictionary.pageCount = 720
