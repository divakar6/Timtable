import { useTimetableContext } from '../contexts/TimetableContext';
import { generateTimetable } from '../utils/timetableGenerator';

export function useTimetable() {
  const { state: { timetable, isLoading }, dispatch } = useTimetableContext();

  const createTimetable = (subjects) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const generatedTimetable = generateTimetable(subjects);
      dispatch({ type: 'GENERATE_TIMETABLE', payload: generatedTimetable });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const resetTimetable = () => {
    dispatch({ type: 'RESET_TIMETABLE' });
  };

  return { timetable, isLoading, createTimetable, resetTimetable };
}