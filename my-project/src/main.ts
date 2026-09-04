// --- TypeScript Version ---

// Task 2: Convert Book function into a TypeScript class
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

// Task 1: Add types to parameters and return type
function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");

  if (!bookList) return;

  const bookDiv = document.createElement("div");

  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;

  bookList.appendChild(bookDiv);
}

// Create book objects
const book1: Book = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2: Book = new Book(
  "The Lord of the Rings",
  "J.R.R. Tolkien",
  1954
);

// Display books
displayBook(book1);
displayBook(book2);


// Task 3: Create a Review interface
interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

// Task 4: Store reviews in an array
const reviews: Review[] = [];

// Function to add a review
function addReview(review: Review): void {
  reviews.push(review);
}

// Add some reviews
addReview({
  bookId: 1,
  rating: 5,
  comment: "Great book!"
});

addReview({
  bookId: 2,
  rating: 4,
  comment: "Very interesting story."
});

console.log(reviews);