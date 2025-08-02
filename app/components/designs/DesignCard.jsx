// components/DesignCard.jsx

export default function DesignCard({ design, onClick }) {
  return (
    <div
      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
      onClick={() => onClick(design)}
    >
      <img
        src={design.thumbnail}
        alt={design.title}
        className="w-full h-80 object-cover"
        loading="eager"
      />
      <div className="p-2 text-center font-medium">{design.title}</div>
    </div>
  );
}
