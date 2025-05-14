import { useTimetable } from '../../hooks/useTimetable';

export function TimetableGrid() {
  const { timetable } = useTimetable();

  if (!timetable) return null;

  const days = Object.keys(timetable);
  const periods = timetable[days[0]]?.length || 0;

  return (
    <div>
      <h2 className="form-title">Generated Timetable</h2>
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Time/Day</th>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: periods }).map((_, periodIndex) => (
            <tr key={periodIndex}>
              <td>Period {periodIndex + 1}</td>
              {days.map(day => {
                const period = timetable[day][periodIndex];
                return (
                  <td key={`${day}-${periodIndex}`}>
                    {period ? (
                      <>
                        <div className="subject-cell">{period.subject}</div>
                        <div className="teacher-cell">{period.teacher}</div>
                      </>
                    ) : (
                      <span className="free-period">Free</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}