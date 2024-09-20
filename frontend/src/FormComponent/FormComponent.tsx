import { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // handle form submission here (e.g., send data to an API)
  };

  return (
    <div className="userForm">
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Age:
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
            />
            </label>
        </div>
        <div>
            <label>
            Height (cm):
            <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
            />
            </label>
        </div>
        <div>
            <label>
            Weight (kg):
            <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
            />
            </label>
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>

  );
};

export default FormComponent;
