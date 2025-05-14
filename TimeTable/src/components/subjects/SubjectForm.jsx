import { useState } from 'react';
import { validateSubjectInput } from '../../utils/validators';
import { useSubjects } from '../../hooks/useSubjects';

export function SubjectForm() {
  const [formData, setFormData] = useState({
    subject: '',
    teacher: '',
    hours: ''
  });
  const [errors, setErrors] = useState({});
  const { addSubject } = useSubjects();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateSubjectInput(formData);
    
    if (validation.isValid) {
      addSubject({
        ...formData,
        hours: parseInt(formData.hours),
        id: Date.now()
      });
      setFormData({ subject: '', teacher: '', hours: '' });
      setErrors({});
    } else {
      setErrors(validation.errors);
    }
  };

  return (
    <div>
      <h2 className="form-title">Add New Subject</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Subject Name</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            required
          />
          {errors.subject && <span style={{ color: 'red', fontSize: '14px' }}>{errors.subject}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Teacher</label>
          <input
            type="text"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            className="form-input"
            required
          />
          {errors.teacher && <span style={{ color: 'red', fontSize: '14px' }}>{errors.teacher}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Weekly Hours</label>
          <input
            type="number"
            name="hours"
            min="1"
            value={formData.hours}
            onChange={handleChange}
            className="form-input"
            required
          />
          {errors.hours && <span style={{ color: 'red', fontSize: '14px' }}>{errors.hours}</span>}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Subject
        </button>
      </form>
    </div>
  );
}