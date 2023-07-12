const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
library.filter(numberOfBooksRead);
const numberOfBooksRead = (element) => {


  return element.readingStatus == true;



};


// Do not change the code below

alert(numberOfBooksRead());
