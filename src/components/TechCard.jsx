export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Top header crad -  Icon & Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 border border-gray-100 flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-50 text-purple-600 border border-purple-100">
            {tech.badge}
          </span>
        </div>

        {/* Tech Name and Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">{tech.description}</p>
      </div>

      <div>
        {/* Technology Metadata - Category, Difficulty, Rating */}
        <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-5 pt-4 border-t border-gray-50">
          <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-1 text-amber-500 font-bold">
            ★ {tech.rating}
          </span>
        </div>

        {/*(--------- Action Button --------------- */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "brand-gradient text-white shadow-md hover:opacity-95"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}