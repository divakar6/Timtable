import { TimetableDay } from './TimetableDay';
import { useTimetable } from '../../hooks/useTimetable';

export function TimetableGrid() {
  const { timetable } = useTimetable();

  if (!timetable) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Generated Timetable</h2>
      {Object.entries(timetable).map(([day, periods]) => (
        <TimetableDay key={day} day={day} periods={periods} />
      ))}
    </div>
  );
}