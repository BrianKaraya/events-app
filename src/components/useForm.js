import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});

  //   to update values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
  };

  const handleLogin = (e) => {
    e.history.push('/couponDeals');
  };

  return { handleChange, values, handleSubmit, handleLogin };
};

export default useForm;
