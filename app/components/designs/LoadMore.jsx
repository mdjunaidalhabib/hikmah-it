// components/LoadMore.jsx

export default function LoadMore({ hasMore, onClick }) {
  if (!hasMore) return null;

  return (
    <div className="text-center mt-4">
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Load More
      </button>
    </div>
  );
}
