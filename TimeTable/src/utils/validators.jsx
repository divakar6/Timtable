export function validateSubjectInput(subjectData) {
  const errors = {};
  
  if (!subjectData.subject || subjectData.subject.trim() === '') {
    errors.subject = 'Subject name is required';
  }
  
  if (!subjectData.teacher || subjectData.teacher.trim() === '') {
    errors.teacher = 'Teacher name is required';
  }
  
  if (!subjectData.hours || isNaN(subjectData.hours) || subjectData.hours < 1) {
    errors.hours = 'Weekly hours must be at least 1';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}