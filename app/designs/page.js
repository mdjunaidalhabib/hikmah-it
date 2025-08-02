// pages/designs.jsx
"use client"
import { useState } from "react";
import { designs as allDesigns } from "../components/designs/designsData";
import DesignCard from "../components/designs/DesignCard";
import DesignModal from "../components/designs/DesignModal";
import SearchBar from "../components/designs/SearchBar";
import CategoryFilter from "../components/designs/CategoryFilter";
import LoadMore from "../components/designs/LoadMore";

export default function DesignsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalDesign, setModalDesign] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = allDesigns.filter((d) => {
    const matchesSearch = d.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const visibleDesigns = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <div className="p-4 max-w-6xl mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">ID Card Designs</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleDesigns.map((design) => (
          <DesignCard
            key={design.id}
            design={design}
            onClick={setModalDesign}
          />
        ))}
      </div>
      <LoadMore
        hasMore={hasMore}
        onClick={() => setVisibleCount((v) => v + 6)}
      />
      <DesignModal design={modalDesign} onClose={() => setModalDesign(null)} />
    </div>
  );
}
