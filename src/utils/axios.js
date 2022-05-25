import axios from 'axios';

const customFetch = axios.create({
  // TODO:
  // baseURL: process.env.REACT_APP_BASE_URL,

  baseURL: process.env.REACT_APP_BASE_URI,
  // baseURL:
  //   'https://jobify-prod.herokuapp.com/api/v1/toolkit' ||
  //   process.env.REACT_APP_BASE_URI,
});

export default customFetch;
