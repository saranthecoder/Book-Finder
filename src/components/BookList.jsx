import BookCard from "./BookCard";

// export default function BookList() {

// }

import React from 'react'

const BookList = ({ books }) => {
    if (!books.length) {
    return (
      <p className="text-gray-600 text-center mt-6">
        Start by searching for a book title above.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList
