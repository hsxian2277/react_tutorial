import { useState } from 'react';

export default function useForm({initialValues, onSubmit}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
}