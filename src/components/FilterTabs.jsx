/**
 * Pill-shaped segmented control used to filter lists.
 * options: [{ key, label }]
 */
const FilterTabs = ({ options, value, onChange, className = "" }) => (
  <div
    role="tablist"
    className={`inline-flex flex-wrap justify-center items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm ${className}`.trim()}
  >
    {options.map((option) => {
      const active = value === option.key;
      return (
        <button
          key={option.key}
          type="button"
          role="tab"
          aria-selected={active}
          onClick={() => onChange(option.key)}
          className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60 ${
            active
              ? "bg-green-400 text-slate-950 shadow-[0_8px_24px_rgba(74,222,128,0.3)]"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          }`}
        >
          {option.label}
        </button>
      );
    })}
  </div>
);

export default FilterTabs;
