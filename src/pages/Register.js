import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../features/user/userSlice';

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

  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!name && !isMember)) {
      toast.error('please fill out all fields');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user, navigate]);

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
          name="email"
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
        <button className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
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
