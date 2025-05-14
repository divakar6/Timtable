import { useState } from 'react';
import { Button } from '../../components/common/Button';
import { InputField } from '../../components/common/InputField';
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
        id: Date.now() // Temporary ID
      });
      setFormData({ subject: '', teacher: '', hours: '' });
      setErrors({});
    } else {
      setErrors(validation.errors);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Subject</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Subject Name"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
        />
        <InputField
          label="Teacher"
          name="teacher"
          value={formData.teacher}
          onChange={handleChange}
          error={errors.teacher}
        />
        <InputField
          label="Weekly Hours"
          name="hours"
          type="number"
          min="1"
          value={formData.hours}
          onChange={handleChange}
          error={errors.hours}
        />
        <Button type="submit" variant="success">
          Add Subject
        </Button>
      </form>
    </div>
  );
}