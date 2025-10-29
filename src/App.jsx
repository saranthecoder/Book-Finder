import { useState } from "react";
import BookList from "./components/BookList";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async () => {
    if (!query.trim()) {
      setError("Please enter a book title.");
      return;
    }

    setError("");
    setLoading(true);
    setBooks([]);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();

      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs.slice(0, 20));
      } else {
        setError("No books found. Try a different title!");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching books.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 tracking-tight">
        📚 Book Finder
      </h1>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8">
        <input
          type="text"
          placeholder="Search by book title... (eg: Harry Potter)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchBooks()}
          className="border border-indigo-300 rounded-xl px-4 py-2 w-full sm:w-80 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
        />
        <button
          onClick={searchBooks}
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition-all shadow-md"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-600 mb-6">{error}</p>}

      {loading ? (
        <div className="flex flex-col items-center mt-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-indigo-500 border-solid mb-3"></div>
          <p className="text-indigo-600 font-medium">Loading books...</p>
        </div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
}
