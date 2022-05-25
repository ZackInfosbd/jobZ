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

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {}, []);

  // redux toolkit and useNavigate later

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            labelText="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          labelText="email"
          name={values.email}
          value={values.email}
          onChange={handleChange}
        />
        <FormRow
          type="password"
          labelText="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button className="btn btn-block">Submit</button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
