interface LocationLineProps {
  fromName: string;
  toName: string;
}

export default function LocationLine({ fromName, toName }: LocationLineProps) {
  return (
    <div className="w-full bg-blue-50 p-4 rounded-xl border border-blue-100 my-3">
      <div className="flex items-center justify-between text-xs font-semibold text-blue-900">
        <span className="bg-white px-2.5 py-1 rounded-md shadow-xs border border-blue-200">
          {fromName}
        </span>
        
        {/* Connecting Line with Icon */}
        <div className="flex-1 flex items-center justify-center mx-2 relative">
          <div className="w-full border-t-2 border-dashed border-blue-400"></div>
          <span className="absolute bg-blue-600 text-white rounded-full p-1 text-[10px] shadow-sm">
            📍
          </span>
        </div>

        <span className="bg-white px-2.5 py-1 rounded-md shadow-xs border border-blue-200">
          {toName}
        </span>
      </div>
    </div>
  );
}