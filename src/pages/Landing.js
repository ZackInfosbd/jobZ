import React from 'react';
import { Logo } from '../components';
import main from '../assets/images/main.svg';
import LandingPage from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <LandingPage>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            repellat ad doloremque tempore beatae recusandae voluptatibus
            debitis unde repellendus vero.
          </p>
          <button className="btn btn-hero">Login/register</button>
        </div>
        <img src={main} alt="main" className="img main-img" />
      </div>
    </LandingPage>
  );
};

export default Landing;
