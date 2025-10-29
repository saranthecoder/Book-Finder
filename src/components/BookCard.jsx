export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center text-center">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-40 h-56 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-2">
        {book.title}
      </h3>
      <p className="text-gray-600 text-sm">
        {book.author_name ? book.author_name[0] : "Unknown Author"}
      </p>
      <p className="text-gray-500 text-xs mt-1">
        {book.first_publish_year || "—"}
      </p>
      <a
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full hover:bg-indigo-200 transition"
      >
        View on OpenLibrary
      </a>
    </div>
  );
}
