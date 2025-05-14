import { SubjectForm } from './subjects/SubjectForm';
import { SubjectList } from './subjects/SubjectList';
import { TimetableControls } from './timetable/TimetableControls';
import { TimetableGrid } from './timetable/TimetableGrid';

export function AppLayout() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">School Timetable Generator</h1>
        <p className="text-gray-600">
          Create balanced timetables with no more than 3 hours per subject per day
        </p>
      </header>

      <main className="space-y-6">
        <section>
          <SubjectForm />
          <SubjectList />
        </section>

        <section>
          <TimetableControls />
          <TimetableGrid />
        </section>
      </main>
    </div>
  );
}