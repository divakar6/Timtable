export function TimetableDay({ day, periods }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 bg-gray-100 p-2 rounded">{day}</h3>
      <div className="grid grid-cols-3 gap-2">
        {periods.map((period, index) => (
          <div
            key={index}
            className={`p-3 rounded border ${period ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-100'}`}
          >
            <div className="text-xs text-gray-500 mb-1">Period {index + 1}</div>
            {period ? (
              <>
                <div className="font-medium">{period.subject}</div>
                <div className="text-sm text-gray-600">{period.teacher}</div>
              </>
            ) : (
              <div className="text-gray-400">Free</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}