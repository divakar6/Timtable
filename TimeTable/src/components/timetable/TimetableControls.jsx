import { useTimetable } from '../../hooks/useTimetable';
import { useSubjects } from '../../hooks/useSubjects';

export function TimetableControls() {
  const { subjects } = useSubjects();
  const { timetable, isLoading, createTimetable, resetTimetable } = useTimetable();

  return (
    <div className="controls-container">
      <button
        onClick={() => createTimetable(subjects)}
        disabled={subjects.length === 0 || isLoading}
        className="btn btn-primary"
      >
        {isLoading ? 'Generating...' : 'Generate Timetable'}
      </button>
      {timetable && (
        <button
          onClick={resetTimetable}
          disabled={isLoading}
          className="btn btn-danger"
        >
          Reset Timetable
        </button>
      )}
    </div>
  );
}