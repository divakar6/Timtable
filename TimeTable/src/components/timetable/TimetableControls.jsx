import { Button } from "../../components/common/Button"
import { useTimetable } from '../../hooks/useTimetable';
import { useSubjects } from '../../hooks/useSubjects';

export function TimetableControls() {
  const { subjects } = useSubjects();
  const { timetable, isLoading, createTimetable, resetTimetable } = useTimetable();

  return (
    <div className="flex gap-4 mb-6">
      <Button
        onClick={() => createTimetable(subjects)}
        disabled={subjects.length === 0 || isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Timetable'}
      </Button>
      {timetable && (
        <Button
          onClick={resetTimetable}
          variant="danger"
          disabled={isLoading}
        >
          Reset Timetable
        </Button>
      )}
    </div>
  );
}