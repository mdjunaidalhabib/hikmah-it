// components/CategoryFilter.jsx

export default function CategoryFilter({ selected, setSelected }) {
  const categories = ["All", "Madrasa", "School", "Office"];

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-3 py-1 rounded-full ${
            selected === cat ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
