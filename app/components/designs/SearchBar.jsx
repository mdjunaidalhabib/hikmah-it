// components/SearchBar.jsx

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search designs..."
      className="border px-4 py-2 rounded w-full mb-4 "
    />
  );
}
