// components/DesignModal.jsx

export default function DesignModal({ design, onClose }) {
  if (!design) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-xl max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-2">{design.title}</h2>
        <img
          src={design.fullImage}
          alt={design.title}
          className="w-full h-auto rounded"
        />
        <div className="mt-4 flex justify-end gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Apply
          </button>
          <a
            href={design.fullImage}
            download
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
