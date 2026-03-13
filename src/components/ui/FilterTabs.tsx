import React from 'react';

interface Category {
  id: string;
  label: string;
}

const categories: Category[] = [
  { id: 'all', label: 'ALL' },
  { id: 'tights', label: 'TIGHTS & HOSIERY' },
  { id: 'thigh-highs', label: 'THIGH-HIGHS' },
  { id: 'bodystocking', label: 'BODYSTOCKINGS' },
  { id: 'socks', label: 'SOCKS & KNEE-HIGHS' },
];

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onFilterChange(cat.id)}
          className={`px-5 py-2 rounded-full text-[12px] font-body font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
            activeFilter === cat.id
              ? 'bg-gloss-rose text-white'
              : 'bg-gloss-offwhite text-gloss-grey hover:bg-gloss-light hover:text-gloss-black'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
