import { useSubjects } from '../../hooks/useSubjects';

export function SubjectList() {
  const { subjects } = useSubjects();

  return (
    <div>
      <h2 className="form-title">Current Subjects</h2>
      {subjects.length === 0 ? (
        <p>No subjects added yet</p>
      ) : (
        <div className="subject-list">
          {subjects.map((subject) => (
            <div key={subject.id} className="subject-item">
              <div>
                <div className="subject-name">{subject.subject}</div>
                <div className="subject-teacher">Teacher: {subject.teacher}</div>
              </div>
              <div className="subject-hours">{subject.hours} hrs/week</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}