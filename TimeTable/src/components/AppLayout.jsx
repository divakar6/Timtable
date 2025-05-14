import { SubjectForm } from './subjects/SubjectForm';
import { SubjectList } from './subjects/SubjectList';
import { TimetableControls } from './timetable/TimetableControls';
import { TimetableGrid } from './timetable/TimetableGrid';

export default function AppLayout() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>School Timetable Generator</h1>
        <p>Create balanced timetables with no more than 3 hours per subject per day</p>
      </header>

      <main className="main-content">
        <div>
          <div className="form-card">
            <SubjectForm />
          </div>
          <div className="form-card">
            <SubjectList />
          </div>
        </div>
        <div>
          <div className="form-card">
            <TimetableControls />
          </div>
          <div className="form-card">
            <TimetableGrid />
          </div>
        </div>
      </main>
    </div>
  );
}