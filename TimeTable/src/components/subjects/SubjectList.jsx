import { useSubjects } from '../../hooks/useSubjects';

export function SubjectList() {
  const { subjects } = useSubjects();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Current Subjects</h2>
      {subjects.length === 0 ? (
        <p className="text-gray-500">No subjects added yet</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {subjects.map((subject) => (
            <li key={subject.id} className="py-3">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{subject.subject}</h3>
                  <p className="text-sm text-gray-600">Teacher: {subject.teacher}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {subject.hours} hrs/week
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}