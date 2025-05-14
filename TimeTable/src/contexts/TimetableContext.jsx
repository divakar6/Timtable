import { createContext, useContext, useReducer } from 'react';

const TimetableContext = createContext();

const initialState = {
  subjects: [],
  timetable: null,
  isLoading: false,
  error: null
};

function timetableReducer(state, action) {
  switch (action.type) {
    case 'ADD_SUBJECT':
      return {
        ...state,
        subjects: [...state.subjects, action.payload]
      };
    case 'GENERATE_TIMETABLE':
      return {
        ...state,
        timetable: action.payload
      };
    case 'RESET_TIMETABLE':
      return {
        ...state,
        timetable: null
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export function TimetableProvider({ children }) {
  const [state, dispatch] = useReducer(timetableReducer, initialState);

  return (
    <TimetableContext.Provider value={{ state, dispatch }}>
      {children}
    </TimetableContext.Provider>
  );
}

export function useTimetableContext() {
  return useContext(TimetableContext);
}