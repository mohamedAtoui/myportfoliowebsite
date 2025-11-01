"use client";
import React from "react";

interface FilterBarProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
}

const categories = [
  "All",
  "AI/Machine Learning",
  "Web Development",
  "Product Development",
  "Systems/Compilers",
  "Security/Authentication",
];

export default function FilterBar({
  selectedTags,
  onTagToggle,
  onClearAll,
}: FilterBarProps) {
  const isTagSelected = (tag: string) => {
    if (tag === "All") return selectedTags.length === 0;
    return selectedTags.includes(tag);
  };

  const handleTagClick = (tag: string) => {
    if (tag === "All") {
      onClearAll();
    } else {
      onTagToggle(tag);
    }
  };

  return (
    <div className="mb-10 w-full flex flex-wrap justify-center items-center gap-3 px-4">
      {categories.map((category) => {
        const selected = isTagSelected(category);
        return (
          <button
            key={category}
            onClick={() => handleTagClick(category)}
            style={{
              display: 'inline-block',
              backgroundColor: selected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              color: '#e4ded7',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '8px 20px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: selected ? '600' : '400',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = selected
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(255, 255, 255, 0.05)';
            }}
          >
            {category}
          </button>
        );
      })}

      {selectedTags.length > 0 && (
        <button
          onClick={onClearAll}
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#e4ded7',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '8px 20px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: '400',
            cursor: 'pointer',
            opacity: 0.7
          }}
        >
          Clear All
        </button>
      )}
    </div>
  );
}
