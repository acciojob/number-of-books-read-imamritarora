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

const numberOfBooksRead = () => {
		let count=0;
  // write your code here
	
	if (library.readingStatus=="true"){
		return count++;
	}
numberOfBooksRead();
	
};


// Do not change the code below

alert(numberOfBooksRead());
