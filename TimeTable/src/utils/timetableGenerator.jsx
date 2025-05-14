export function generateTimetable(subjects) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periodsPerDay = 6; // Assuming 6 periods per day
  const timetable = {};
  
  // Initialize empty timetable
  days.forEach(day => {
    timetable[day] = Array(periodsPerDay).fill(null);
  });
  
  // Helper function to count subject hours per day
  const getSubjectHoursPerDay = (timetableDay, subjectName) => {
    return timetableDay.filter(period => period && period.subject === subjectName).length;
  };
  
  // Distribute subjects
  subjects.forEach(subject => {
    let hoursLeft = subject.hours;
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loops
    
    while (hoursLeft > 0 && attempts < maxAttempts) {
      attempts++;
      const randomDay = days[Math.floor(Math.random() * days.length)];
      const randomPeriod = Math.floor(Math.random() * periodsPerDay);
      
      const currentDayTimetable = timetable[randomDay];
      const subjectHoursToday = getSubjectHoursPerDay(currentDayTimetable, subject.subject);
      
      if (subjectHoursToday < 3 && !currentDayTimetable[randomPeriod]) {
        currentDayTimetable[randomPeriod] = {
          subject: subject.subject,
          teacher: subject.teacher,
          subjectId: subject.id || Date.now() // Temporary ID if not provided
        };
        hoursLeft--;
      }
    }
    
    if (attempts >= maxAttempts && hoursLeft > 0) {
      throw new Error(`Could not allocate all hours for ${subject.subject}`);
    }
  });
  
  return timetable;
}