import { useTimetableContext } from '../contexts/TimetableContext';

export function useSubjects() {
  const { state: { subjects }, dispatch } = useTimetableContext();

  const addSubject = (subjectData) => {
    dispatch({ type: 'ADD_SUBJECT', payload: subjectData });
  };

  return { subjects, addSubject };
}