export default function Sidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-20">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
        <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
        <span className="px-3 py-1 rounded-full text-xs font-semibold brand-gradient text-white">
          {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </span>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="text-center py-12 px-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Your Stack is Empty</h4>
          <p className="text-xs text-gray-500">
            Select technologies from the grid to add them to your stack builder.
          </p>
        </div>
      ) : (
        /* Stack Items List */
        <div className="space-y-4">
          <div className="max-h-80 overflow-y-auto space-y-3 pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                    <span className="text-xs text-gray-500">{item.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 rounded-xl text-xs font-semibold text-red-600 border border-red-200 hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}