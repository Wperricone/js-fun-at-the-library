
// var title = hyperion
// var shelf = sciFiShelf
// console.log(hyperion, +  sciFiShelf);
// var sciFiShelf = [];
// console.log(sciFiShelf.push(hyperion));
// console.log(sciFiShelf.unshift(dune));
// shelfBook();
function shelfBook(title, shelf/*array*/) {
if (shelf.length < 3) {
  return shelf.unshift(title)
} else {
  return
}

};
//want to put the two vars into the array sciFiShelf


function unshelfBook(bookName, shelf) {
for (var i = 0; i < shelf.length; i++) {
 if (bookName === shelf[i].title) {
   shelf.splice(i, 1);
 } else {

 }
} return

  //return shelf[1].title.splice
};

function listTitles(shelf) {
var titleString = ""

for (var i = 0; i < shelf.length; i++) {

if (i < shelf.length -1) {

  titleString += shelf[i].title + ", "
} else {
  titleString += shelf[i].title
}
}
return titleString
}

function searchShelf(shelf, title) {
for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === title) {
  return true
} 
}
return false
}
//shelf = array
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
