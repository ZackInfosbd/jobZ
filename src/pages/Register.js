import React, { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
// redux toolkit and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  useEffect(() => {}, []);

  // redux toolkit and useNavigate later

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name field */}
        <FormRow
          labelText="name"
          name={values.name}
          value={values.name}
          onChange={handleChange}
        />
        <FormRow
          labelText="email"
          name={values.email}
          value={values.email}
          onChange={handleChange}
        />
        <button className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  );
};

export default Register;
